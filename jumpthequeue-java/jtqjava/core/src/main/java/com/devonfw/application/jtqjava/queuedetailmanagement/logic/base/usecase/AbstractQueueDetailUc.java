package com.devonfw.application.jtqjava.queuedetailmanagement.logic.base.usecase;

import javax.inject.Inject;

import com.devonfw.application.jtqjava.general.logic.base.AbstractUc;
import com.devonfw.application.jtqjava.queuedetailmanagement.dataaccess.api.repo.QueueDetailRepository;

/**
 * Abstract use case for QueueDetails, which provides access to the commonly necessary data access objects.
 */
public class AbstractQueueDetailUc extends AbstractUc {

  /** @see #getQueueDetailRepository() */
  @Inject
  private QueueDetailRepository queueDetailRepository;

  /**
   * Returns the field 'queueDetailRepository'.
   * 
   * @return the {@link QueueDetailRepository} instance.
   */
  public QueueDetailRepository getQueueDetailRepository() {

    return this.queueDetailRepository;
  }

}
