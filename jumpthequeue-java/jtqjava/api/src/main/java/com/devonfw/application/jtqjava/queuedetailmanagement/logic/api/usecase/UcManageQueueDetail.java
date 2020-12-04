package com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.usecase;

import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.to.QueueDetailEto;

/**
 * Interface of UcManageQueueDetail to centralize documentation and signatures of methods.
 */
public interface UcManageQueueDetail {

  /**
   * Deletes a queueDetail from the database by its id 'queueDetailId'.
   *
   * @param queueDetailId Id of the queueDetail to delete
   * @return boolean <code>true</code> if the queueDetail can be deleted, <code>false</code> otherwise
   */
  void deleteQueueDetail(long queueDetailId);

  /**
   * Saves a queueDetail and store it in the database.
   *
   * @param queueDetail the {@link QueueDetailEto} to create.
   * @return the new {@link QueueDetailEto} that has been saved with ID and version.
   */
  QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail);

}
