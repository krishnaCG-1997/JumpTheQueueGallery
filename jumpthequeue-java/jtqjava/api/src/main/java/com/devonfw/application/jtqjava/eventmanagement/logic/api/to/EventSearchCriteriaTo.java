package com.devonfw.application.jtqjava.eventmanagement.logic.api.to;

import java.sql.Timestamp;

import com.devonfw.application.jtqjava.general.common.api.to.AbstractSearchCriteriaTo;
import com.devonfw.module.basic.common.api.query.StringSearchConfigTo;

/**
 * {@link SearchCriteriaTo} to find instances of
 * {@link com.devonfw.application.jtqjava.eventmanagement.common.api.Event}s.
 */
public class EventSearchCriteriaTo extends AbstractSearchCriteriaTo {

  private static final long serialVersionUID = 1L;

  private String eventName;

  private Timestamp startDate;

  private Timestamp endDate;

  private String location;

  private String description;

  private String logo;

  private String attentionTime;

  private StringSearchConfigTo eventNameOption;

  private StringSearchConfigTo locationOption;

  private StringSearchConfigTo descriptionOption;

  private StringSearchConfigTo logoOption;

  private Integer visitorCount;

  private String currentlyBeingAttended;

  private StringSearchConfigTo currentlyBeingAttendedOption;

  private StringSearchConfigTo attentionTimeOption;

  /**
   * @return eventNameId
   */
  public String getEventName() {

    return this.eventName;
  }

  /**
   * @param eventName setter for eventName attribute
   */
  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  /**
   * @return startDateId
   */
  public Timestamp getStartDate() {

    return this.startDate;
  }

  /**
   * @param startDate setter for startDate attribute
   */
  public void setStartDate(Timestamp startDate) {

    this.startDate = startDate;
  }

  /**
   * @return endDateId
   */
  public Timestamp getEndDate() {

    return this.endDate;
  }

  /**
   * @param endDate setter for endDate attribute
   */
  public void setEndDate(Timestamp endDate) {

    this.endDate = endDate;
  }

  /**
   * @return locationId
   */
  public String getLocation() {

    return this.location;
  }

  /**
   * @param location setter for location attribute
   */
  public void setLocation(String location) {

    this.location = location;
  }

  /**
   * @return descriptionId
   */
  public String getDescription() {

    return this.description;
  }

  /**
   * @param description setter for description attribute
   */
  public void setDescription(String description) {

    this.description = description;
  }

  /**
   * @return logoId
   */
  public String getLogo() {

    return this.logo;
  }

  /**
   * @param logo setter for logo attribute
   */
  public void setLogo(String logo) {

    this.logo = logo;
  }

  /**
   * @return attentionTimeId
   */
  public String getAttentionTime() {

    return this.attentionTime;
  }

  /**
   * @param attentionTime setter for attentionTime attribute
   */
  public void setAttentionTime(String attentionTime) {

    this.attentionTime = attentionTime;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getEventName() eventName}.
   */
  public StringSearchConfigTo getEventNameOption() {

    return this.eventNameOption;
  }

  /**
   * @param eventNameOption new value of {@link #getEventNameOption()}.
   */
  public void setEventNameOption(StringSearchConfigTo eventNameOption) {

    this.eventNameOption = eventNameOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getLocation() location}.
   */
  public StringSearchConfigTo getLocationOption() {

    return this.locationOption;
  }

  /**
   * @param locationOption new value of {@link #getLocationOption()}.
   */
  public void setLocationOption(StringSearchConfigTo locationOption) {

    this.locationOption = locationOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getDescription() description}.
   */
  public StringSearchConfigTo getDescriptionOption() {

    return this.descriptionOption;
  }

  /**
   * @param descriptionOption new value of {@link #getDescriptionOption()}.
   */
  public void setDescriptionOption(StringSearchConfigTo descriptionOption) {

    this.descriptionOption = descriptionOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getLogo() logo}.
   */
  public StringSearchConfigTo getLogoOption() {

    return this.logoOption;
  }

  /**
   * @param logoOption new value of {@link #getLogoOption()}.
   */
  public void setLogoOption(StringSearchConfigTo logoOption) {

    this.logoOption = logoOption;
  }

  /**
   * @return visitorCountId
   */
  public Integer getVisitorCount() {

    return this.visitorCount;
  }

  /**
   * @param visitorCount setter for visitorCount attribute
   */
  public void setVisitorCount(Integer visitorCount) {

    this.visitorCount = visitorCount;
  }

  /**
   * @return currentlyBeingAttendedId
   */
  public String getCurrentlyBeingAttended() {

    return this.currentlyBeingAttended;
  }

  /**
   * @param currentlyBeingAttended setter for currentlyBeingAttended attribute
   */
  public void setCurrentlyBeingAttended(String currentlyBeingAttended) {

    this.currentlyBeingAttended = currentlyBeingAttended;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getCurrentlyBeingAttended()
   *         currentlyBeingAttended}.
   */
  public StringSearchConfigTo getCurrentlyBeingAttendedOption() {

    return this.currentlyBeingAttendedOption;
  }

  /**
   * @param currentlyBeingAttendedOption new value of {@link #getCurrentlyBeingAttendedOption()}.
   */
  public void setCurrentlyBeingAttendedOption(StringSearchConfigTo currentlyBeingAttendedOption) {

    this.currentlyBeingAttendedOption = currentlyBeingAttendedOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getAttentionTime() attentionTime}.
   */
  public StringSearchConfigTo getAttentionTimeOption() {

    return this.attentionTimeOption;
  }

  /**
   * @param attentionTimeOption new value of {@link #getAttentionTimeOption()}.
   */
  public void setAttentionTimeOption(StringSearchConfigTo attentionTimeOption) {

    this.attentionTimeOption = attentionTimeOption;
  }

}
