package com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.usecase;

import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.to.QueueDetailEto;

/**
 * Interface of UcManageQueueDetail to centralize documentation and signatures of methods.
 */
public interface UcManageQueueDetail {

  /**
   * Deletes a queueDetail from the database by its id 'queueDetailId'.
   *
   * @param queueDetailId Id of the queueDetail to delete.
   */
  void deleteQueueDetail(long queueDetailId);

  /**
   * Saves a queueDetail and store it in the database.
   *
   * @param queueDetail the {@link QueueDetailEto} to create.
   * @return newly saved QueueDetailEto object if visitor is joining the event queue for the first time, Null otherwise.
   */
  QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail);

}
