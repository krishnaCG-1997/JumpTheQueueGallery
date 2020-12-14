package com.devonfw.application.jtqjava.eventmanagement.logic.impl.usecase;

import java.util.Objects;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqjava.eventmanagement.dataaccess.api.EventEntity;
import com.devonfw.application.jtqjava.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqjava.eventmanagement.logic.api.usecase.UcManageEvent;
import com.devonfw.application.jtqjava.eventmanagement.logic.base.usecase.AbstractEventUc;

/**
 * Use case implementation for modifying and deleting Events
 */
@Named
@Validated
@Transactional
public class UcManageEventImpl extends AbstractEventUc implements UcManageEvent {

  /**
   * Logger instance.
   */
  private static final Logger LOG = LoggerFactory.getLogger(UcManageEventImpl.class);

  @Override
  public boolean deleteEvent(long eventId) {

    EventEntity event = getEventRepository().find(eventId);
    getEventRepository().delete(event);
    LOG.debug("The event with id '{}' has been deleted.", eventId);
    return true;
  }

  @Override
  public EventEto saveEvent(EventEto event) {

    Objects.requireNonNull(event, "event");

    EventEntity eventEntity = getBeanMapper().map(event, EventEntity.class);

    // initialize, validate eventEntity here if necessary
    EventEntity resultEntity = getEventRepository().save(eventEntity);
    LOG.debug("Event with id '{}' has been created.", resultEntity.getId());
    return getBeanMapper().map(resultEntity, EventEto.class);
  }

  @Override
  public void decreaseVisitorCount(long eventId) {

    EventEntity eventEntity = getEventRepository().find(eventId);

    // the visitors gets decreased by one
    if (eventEntity.getVisitorCount() > 0) {
      eventEntity.setVisitorCount(eventEntity.getVisitorCount() - 1);
    }
    getEventRepository().save(eventEntity);

  }

  @Override
  public void increaseVisitorCount(long eventId) {

    EventEntity eventEntity = getEventRepository().find(eventId);

    // the visitors gets increased by one
    eventEntity.setVisitorCount(eventEntity.getVisitorCount() + 1);

    getEventRepository().save(eventEntity);

  }

}
