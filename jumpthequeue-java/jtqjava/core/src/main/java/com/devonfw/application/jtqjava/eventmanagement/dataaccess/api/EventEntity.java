package com.devonfw.application.jtqjava.eventmanagement.dataaccess.api;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.devonfw.application.jtqjava.eventmanagement.common.api.Event;
import com.devonfw.application.jtqjava.general.dataaccess.api.ApplicationPersistenceEntity;

/**
 * @author kragarwa
 */
@Entity
@Table(name = "Event")
public class EventEntity extends ApplicationPersistenceEntity implements Event {

  private String eventName;

  @Temporal(TemporalType.TIMESTAMP)
  private Timestamp startDate;

  @Temporal(TemporalType.TIMESTAMP)
  private Timestamp endDate;

  private String location;

  private String description;

  private String logo;

  private int visitorCount;

  private String attentionTime;

  private String currentlyBeingAttended;

  private static final long serialVersionUID = 1L;

  /**
   * @return currentlyBeingAttended
   */
  @Override
  public String getCurrentlyBeingAttended() {

    return this.currentlyBeingAttended;
  }

  /**
   * @param currentlyBeingAttended new value of {@link #getcurrentlyBeingAttended}.
   */
  @Override
  public void setCurrentlyBeingAttended(String currentlyBeingAttended) {

    this.currentlyBeingAttended = currentlyBeingAttended;
  }

  /**
   * @return visitorCount
   */
  @Override
  public int getVisitorCount() {

    return this.visitorCount;
  }

  /**
   * @param visitorCount new value of {@link #getvisitorCount}.
   */
  @Override
  public void setVisitorCount(int visitorCount) {

    this.visitorCount = visitorCount;
  }

  /**
   * @return eventName
   */
  @Override
  public String getEventName() {

    return this.eventName;
  }

  /**
   * @param eventName new value of {@link #geteventName}.
   */
  @Override
  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  /**
   * @return startDate
   */
  @Override
  public Timestamp getStartDate() {

    return this.startDate;
  }

  /**
   * @param startDate new value of {@link #getstartDate}.
   */
  @Override
  public void setStartDate(Timestamp startDate) {

    this.startDate = startDate;
  }

  /**
   * @return endDate
   */
  @Override
  public Timestamp getEndDate() {

    return this.endDate;
  }

  /**
   * @param endDate new value of {@link #getendDate}.
   */
  @Override
  public void setEndDate(Timestamp endDate) {

    this.endDate = endDate;
  }

  /**
   * @return location
   */
  @Override
  public String getLocation() {

    return this.location;
  }

  /**
   * @param location new value of {@link #getlocation}.
   */
  @Override
  public void setLocation(String location) {

    this.location = location;
  }

  /**
   * @return description
   */
  @Override
  public String getDescription() {

    return this.description;
  }

  /**
   * @param description new value of {@link #getdescription}.
   */
  @Override
  public void setDescription(String description) {

    this.description = description;
  }

  /**
   * @return logo
   */
  @Override
  public String getLogo() {

    return this.logo;
  }

  /**
   * @param logo new value of {@link #getlogo}.
   */
  @Override
  public void setLogo(String logo) {

    this.logo = logo;
  }

  /**
   * @return attentionTime
   */
  @Override
  public String getAttentionTime() {

    return this.attentionTime;
  }

  /**
   * @param attentionTime new value of {@link #getattentionTime}.
   */
  @Override
  public void setAttentionTime(String attentionTime) {

    this.attentionTime = attentionTime;
  }

}
