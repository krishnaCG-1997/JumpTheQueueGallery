package com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.to;

import java.sql.Timestamp;

import com.devonfw.application.jtqjava.queuedetailmanagement.common.api.QueueDetail;
import com.devonfw.module.basic.common.api.to.AbstractEto;

/**
 * Entity transport object of QueueDetail
 */
public class QueueDetailEto extends AbstractEto implements QueueDetail {

  private static final long serialVersionUID = 1L;

  private String queueNumber;

  private Timestamp creationTime;

  private Timestamp startTime;

  private Timestamp endTime;

  private Timestamp minEstimatedTime;

  private Long visitorId;

  private Long EventId;

  @Override
  public String getQueueNumber() {

    return this.queueNumber;
  }

  @Override
  public void setQueueNumber(String queueNumber) {

    this.queueNumber = queueNumber;
  }

  @Override
  public Timestamp getCreationTime() {

    return this.creationTime;
  }

  @Override
  public void setCreationTime(Timestamp creationTime) {

    this.creationTime = creationTime;
  }

  @Override
  public Timestamp getStartTime() {

    return this.startTime;
  }

  @Override
  public void setStartTime(Timestamp startTime) {

    this.startTime = startTime;
  }

  @Override
  public Timestamp getEndTime() {

    return this.endTime;
  }

  @Override
  public void setEndTime(Timestamp endTime) {

    this.endTime = endTime;
  }

  @Override
  public Timestamp getMinEstimatedTime() {

    return this.minEstimatedTime;
  }

  @Override
  public void setMinEstimatedTime(Timestamp minEstimatedTime) {

    this.minEstimatedTime = minEstimatedTime;
  }

  @Override
  public Long getVisitorId() {

    return this.visitorId;
  }

  @Override
  public void setVisitorId(Long visitorId) {

    this.visitorId = visitorId;
  }

  @Override
  public Long getEventId() {

    return this.EventId;
  }

  @Override
  public void setEventId(Long EventId) {

    this.EventId = EventId;
  }

  @Override
  public int hashCode() {

    final int prime = 31;
    int result = super.hashCode();
    result = prime * result + ((this.queueNumber == null) ? 0 : this.queueNumber.hashCode());
    result = prime * result + ((this.creationTime == null) ? 0 : this.creationTime.hashCode());
    result = prime * result + ((this.startTime == null) ? 0 : this.startTime.hashCode());
    result = prime * result + ((this.endTime == null) ? 0 : this.endTime.hashCode());
    result = prime * result + ((this.minEstimatedTime == null) ? 0 : this.minEstimatedTime.hashCode());

    result = prime * result + ((this.visitorId == null) ? 0 : this.visitorId.hashCode());

    result = prime * result + ((this.EventId == null) ? 0 : this.EventId.hashCode());
    return result;
  }

  @Override
  public boolean equals(Object obj) {

    if (this == obj) {
      return true;
    }
    if (obj == null) {
      return false;
    }
    // class check will be done by super type EntityTo!
    if (!super.equals(obj)) {
      return false;
    }
    QueueDetailEto other = (QueueDetailEto) obj;
    if (this.queueNumber == null) {
      if (other.queueNumber != null) {
        return false;
      }
    } else if (!this.queueNumber.equals(other.queueNumber)) {
      return false;
    }
    if (this.creationTime == null) {
      if (other.creationTime != null) {
        return false;
      }
    } else if (!this.creationTime.equals(other.creationTime)) {
      return false;
    }
    if (this.startTime == null) {
      if (other.startTime != null) {
        return false;
      }
    } else if (!this.startTime.equals(other.startTime)) {
      return false;
    }
    if (this.endTime == null) {
      if (other.endTime != null) {
        return false;
      }
    } else if (!this.endTime.equals(other.endTime)) {
      return false;
    }
    if (this.minEstimatedTime == null) {
      if (other.minEstimatedTime != null) {
        return false;
      }
    } else if (!this.minEstimatedTime.equals(other.minEstimatedTime)) {
      return false;
    }

    if (this.visitorId == null) {
      if (other.visitorId != null) {
        return false;
      }
    } else if (!this.visitorId.equals(other.visitorId)) {
      return false;
    }

    if (this.EventId == null) {
      if (other.EventId != null) {
        return false;
      }
    } else if (!this.EventId.equals(other.EventId)) {
      return false;
    }
    return true;
  }

}
