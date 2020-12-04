package com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.to;

import java.sql.Timestamp;

import com.devonfw.application.jtqjava.general.common.api.to.AbstractSearchCriteriaTo;
import com.devonfw.module.basic.common.api.query.StringSearchConfigTo;

/**
 * {@link SearchCriteriaTo} to find instances of
 * {@link com.devonfw.application.jtqjava.queuedetailmanagement.common.api.QueueDetail}s.
 */
public class QueueDetailSearchCriteriaTo extends AbstractSearchCriteriaTo {

  private static final long serialVersionUID = 1L;

  private String queueNumber;

  private Timestamp creationTime;

  private Timestamp startTime;

  private Timestamp endTime;

  private String minEstimatedTime;

  private Long visitorId;

  private Long EventId;

  private StringSearchConfigTo queueNumberOption;

  private StringSearchConfigTo minEstimatedTimeOption;

  /**
   * @return queueNumberId
   */
  public String getQueueNumber() {

    return this.queueNumber;
  }

  /**
   * @param queueNumber setter for queueNumber attribute
   */
  public void setQueueNumber(String queueNumber) {

    this.queueNumber = queueNumber;
  }

  /**
   * @return creationTimeId
   */
  public Timestamp getCreationTime() {

    return this.creationTime;
  }

  /**
   * @param creationTime setter for creationTime attribute
   */
  public void setCreationTime(Timestamp creationTime) {

    this.creationTime = creationTime;
  }

  /**
   * @return startTimeId
   */
  public Timestamp getStartTime() {

    return this.startTime;
  }

  /**
   * @param startTime setter for startTime attribute
   */
  public void setStartTime(Timestamp startTime) {

    this.startTime = startTime;
  }

  /**
   * @return endTimeId
   */
  public Timestamp getEndTime() {

    return this.endTime;
  }

  /**
   * @param endTime setter for endTime attribute
   */
  public void setEndTime(Timestamp endTime) {

    this.endTime = endTime;
  }

  /**
   * @return minEstimatedTimeId
   */
  public String getMinEstimatedTime() {

    return this.minEstimatedTime;
  }

  /**
   * @param minEstimatedTime setter for minEstimatedTime attribute
   */
  public void setMinEstimatedTime(String minEstimatedTime) {

    this.minEstimatedTime = minEstimatedTime;
  }

  /**
   * getter for visitorId attribute
   *
   * @return visitorId
   */
  public Long getVisitorId() {

    return this.visitorId;
  }

  /**
   * @param visitor setter for visitor attribute
   */
  public void setVisitorId(Long visitorId) {

    this.visitorId = visitorId;
  }

  /**
   * getter for EventId attribute
   *
   * @return EventId
   */
  public Long getEventId() {

    return this.EventId;
  }

  /**
   * @param Event setter for Event attribute
   */
  public void setEventId(Long EventId) {

    this.EventId = EventId;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getQueueNumber() queueNumber}.
   */
  public StringSearchConfigTo getQueueNumberOption() {

    return this.queueNumberOption;
  }

  /**
   * @param queueNumberOption new value of {@link #getQueueNumberOption()}.
   */
  public void setQueueNumberOption(StringSearchConfigTo queueNumberOption) {

    this.queueNumberOption = queueNumberOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getMinEstimatedTime() minEstimatedTime}.
   */
  public StringSearchConfigTo getMinEstimatedTimeOption() {

    return this.minEstimatedTimeOption;
  }

  /**
   * @param minEstimatedTimeOption new value of {@link #getMinEstimatedTimeOption()}.
   */
  public void setMinEstimatedTimeOption(StringSearchConfigTo minEstimatedTimeOption) {

    this.minEstimatedTimeOption = minEstimatedTimeOption;
  }

}
