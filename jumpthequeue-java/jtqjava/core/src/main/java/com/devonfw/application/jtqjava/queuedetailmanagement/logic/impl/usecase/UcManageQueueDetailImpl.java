package com.devonfw.application.jtqjava.queuedetailmanagement.logic.impl.usecase;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Objects;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqjava.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqjava.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqjava.queuedetailmanagement.dataaccess.api.QueueDetailEntity;
import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.usecase.UcManageQueueDetail;
import com.devonfw.application.jtqjava.queuedetailmanagement.logic.base.usecase.AbstractQueueDetailUc;

/**
 * Use case implementation for modifying and deleting QueueDetails
 */
@Named
@Validated
@Transactional
public class UcManageQueueDetailImpl extends AbstractQueueDetailUc implements UcManageQueueDetail {

  @Inject
  private Eventmanagement eventManagement;

  @Inject
  private Queuedetailmanagement queueDetailManagement;

  /**
   * Logger instance.
   */
  private static final Logger LOG = LoggerFactory.getLogger(UcManageQueueDetailImpl.class);

  @Override
  public void deleteQueueDetail(long queueDetailId) {

    QueueDetailEntity queueDetail = getQueueDetailRepository().find(queueDetailId);
    this.eventManagement.decreaseVisitorCount(queueDetail.getEventId());
    getQueueDetailRepository().delete(queueDetail);
    LOG.debug("The queueDetail with id '{}' has been deleted.", queueDetailId);

  }

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queueDetailEto) {

    Objects.requireNonNull(queueDetailEto, "UcManageQueueDetailImpl queueDetail null");

    QueueDetailEntity queueDetailEntity = getBeanMapper().map(queueDetailEto, QueueDetailEntity.class);

    long eventId = queueDetailEntity.getEventId();
    long visitorId = queueDetailEntity.getVisitorId();

    QueueDetailSearchCriteriaTo queueDetailSearchCriteriaTo = new QueueDetailSearchCriteriaTo();
    queueDetailSearchCriteriaTo.setEventId(eventId);
    queueDetailSearchCriteriaTo.setVisitorId(visitorId);
    Pageable pageable = PageRequest.of(0, 1000);
    queueDetailSearchCriteriaTo.setPageable(pageable);

    /**
     * Calling the parent with the queueDetailManagement (injected) we use the method findQueueDetailEtos() that will
     * call the implementation of the method inside (UcFindQueueDetailImpl) through the interface. This allows us to use
     * the {@link UcFindQueueDetailImpl}.
     */
    List<QueueDetailEto> queueDetailEtosInQueue = this.queueDetailManagement
        .findQueueDetailEtos(queueDetailSearchCriteriaTo).getContent();

    if (queueDetailEtosInQueue.isEmpty()) {

      QueueDetailSearchCriteriaTo queueDetailEventSearchCriteriaTo = new QueueDetailSearchCriteriaTo();
      queueDetailEventSearchCriteriaTo.setEventId(eventId);
      Pageable pageable1 = PageRequest.of(0, 1000);
      queueDetailEventSearchCriteriaTo.setPageable(pageable1);

      List<QueueDetailEto> queueDetailEventEtosInQueue = this.queueDetailManagement
          .findQueueDetailEtos(queueDetailEventSearchCriteriaTo).getContent();

      EventEto event = this.eventManagement.eventById(eventId);

      if (queueDetailEventEtosInQueue.isEmpty()) {

        queueDetailEntity.setQueueNumber("Q001");
        queueDetailEntity.setMinEstimatedTime(String.valueOf(event.getAttentionTime().getTime() / 1000));

      } else {

        int lastIndex = queueDetailEventEtosInQueue.size() - 1;
        QueueDetailEto lastQueueNumber = queueDetailEventEtosInQueue.get(lastIndex);
        int lastTicketDigit = Integer.parseInt(lastQueueNumber.getQueueNumber().substring(1));
        queueDetailEntity.setQueueNumber(generateTicketCode(lastTicketDigit));
        queueDetailEntity.setMinEstimatedTime(calculateEstimatedTime(event, lastTicketDigit + 1));
        System.out.println(calculateEstimatedTime(event, lastTicketDigit + 1));
      }

      // set the creation time, startTime and endTime
      queueDetailEntity.setCreationTime(Timestamp.from(Instant.now()));
      queueDetailEntity.setStartTime(event.getStartDate());
      queueDetailEntity.setEndTime(event.getEndDate());

      // save the queueDetail & increment visitor count
      this.eventManagement.increaseVisitorCount(eventId);
      QueueDetailEntity queueDetailEntitySaved = getQueueDetailRepository().save(queueDetailEntity);
      LOG.debug("The queueDetail with id '{}' has been saved.", queueDetailEntitySaved.getId());

      return getBeanMapper().map(queueDetailEntitySaved, QueueDetailEto.class);
    } else {
      return null;
    }
  }

  /**
   * Generates a new ticked code using the ticket digit of the last Queue Number created.
   *
   * @param lastTicketDigit the int of the last queueNumber created.
   * @return the String with the new ticket code (example: 'Q005').
   */
  public String generateTicketCode(int lastTicketDigit) {

    int newTicketDigit = lastTicketDigit + 1;
    String newTicketCode = "";

    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append(newTicketDigit);
    while (stringBuilder.length() < 3) {
      stringBuilder.insert(0, "0");
    }
    stringBuilder.insert(0, "Q");
    newTicketCode = stringBuilder.toString();
    return newTicketCode;
  }

  public String calculateEstimatedTime(EventEto event, int queueNumber) {

    long time = event.getAttentionTime().getTime();
    long queueTime = time * queueNumber / 1000;
    return String.valueOf(queueTime);
  }
}
