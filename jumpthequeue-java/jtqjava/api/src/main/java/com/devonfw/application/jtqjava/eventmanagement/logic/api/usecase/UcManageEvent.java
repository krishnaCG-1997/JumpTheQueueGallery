package com.devonfw.application.jtqjava.eventmanagement.logic.api.usecase;

import com.devonfw.application.jtqjava.eventmanagement.logic.api.to.EventEto;

/**
 * Interface of UcManageEvent to centralize documentation and signatures of methods.
 */
public interface UcManageEvent {

  /**
   * Deletes a event from the database by its id 'eventId'.
   *
   * @param eventId Id of the event to delete
   * @return boolean <code>true</code> if the event can be deleted, <code>false</code> otherwise
   */
  boolean deleteEvent(long eventId);

  /**
   * Saves a event and store it in the database.
   *
   * @param event the {@link EventEto} to create.
   * @return the new {@link EventEto} that has been saved with ID and version.
   */
  EventEto saveEvent(EventEto event);

  /**
   * Decrease number of customers of the queue and update the queue.
   *
   * @param queueId id of the queue to decrease customer.
   */
  void decreaseVisitorCount(long eventId);

  /**
   * Increase number of customers of the queue and update the queue.
   *
   * @param queueId id of the queue to increase customer.
   */
  void increaseVisitorCount(long eventId);

  EventEto eventById(long eventId);

}
