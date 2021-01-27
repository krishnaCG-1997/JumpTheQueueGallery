import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Event } from '../../event/model/entities/event.entity';
import { QueueDetail } from '../model/entities/queue-detail.entity';

@Injectable()
export class QueueDetailCrudService extends TypeOrmCrudService<QueueDetail> {

  constructor(@InjectRepository(QueueDetail) repo: Repository<QueueDetail>,
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>) {
    super(repo);
  }

  async leaveQueue(id: number): Promise<DeleteResult> {

    const queue: QueueDetail | any = await this.repo.findOne(id);
    const updatedEvent = await this.decreaseVisitorCount(queue.idEvent.id);
    console.log(updatedEvent);
    return this.repo.delete(id);

  }

  async decreaseVisitorCount(eventId: number) {

    const event: Event | any = await this.eventRepository.findOne({ where: { id: eventId } });
    event.visitorCount = event.visitorCount - 1;
    const eventResult = await this.eventRepository.save(event);
    return eventResult;

  }

  calculateEstimatedTime(eventDetails: Event, queueNumber: number) {

    let time: number | any;
    if (eventDetails.attentionTime) {
      time = parseInt(eventDetails.attentionTime) * (60000 * queueNumber);
    }
    const currentTime = new Date().getTime();
    const estimatedTime = new Date(currentTime + time);
    return estimatedTime;

  }

  async fetchJoinedEvents(id: number) {

    const queueDetails: QueueDetail | any = await this.repo.find({ where: { idUser: id } });
    return queueDetails;

  }

  async joinQueue(queueDTO: any) {

    const eventId = queueDTO.eventId;
    const userId = queueDTO.visitorId;
    const queue: QueueDetail = new QueueDetail();
    const queueDetail_InQueue: QueueDetail[] | any = await this.getQueueDetailByeventIdAndUserId(eventId, userId);

    if (queueDetail_InQueue.length != 0) {
      return queueDetail_InQueue;
    }

    const queueDetailEventEtosInQueue: QueueDetail[] | any = await this.getQueueDetailByEventId(eventId);
    const event: Event | any = await this.eventRepository.findOne(eventId);
    event.visitorCount += 1;

    if (queueDetailEventEtosInQueue.length === 0) {
      queue.queueNumber = this.generateTicketCode(1);
      queue.minEstimatedTime = this.calculateEstimatedTime(event, 1);
    }

    else {
      const lastQueueDetail: QueueDetail[] = await this.repo.find({
        where: { idEvent: eventId },
        order: {
          creationTime: 'DESC'
        },
        take: 1
      });

      const lastNumber = lastQueueDetail[0].queueNumber?.split('');
      let lastQueueNumber: number;
      if (lastNumber) {
        lastQueueNumber = parseInt(lastNumber[lastNumber.length - 2] + lastNumber[lastNumber.length - 1]);
        console.log(lastQueueNumber);
      }
      else {
        lastQueueNumber = 0;
      }
      queue.queueNumber = this.generateTicketCode(lastQueueNumber + 1);
      queue.minEstimatedTime = this.calculateEstimatedTime(event, event.visitorCount);
    }

    queue.creationTime = new Date();
    queue.startTime = event?.startDate;
    queue.endTime = event?.endDate;

    const updatedEvent = await this.eventRepository.save(event);
    queue.idEvent = updatedEvent.id;
    queue.idUser = userId;

    const result = await this.repo.save(queue);
    const queueDetails: QueueDetail | any = await this.repo.find({ where: { id: result.id } });
    return queueDetails;

  }

  generateTicketCode(lastTicketDigit: number) {

    const newTicketDigit = (lastTicketDigit).toString().split('');
    const newTicketCode: string = 'Q0';
    if (newTicketDigit.length < 2) {
      const queueNumber = newTicketCode.concat('0', newTicketDigit[0]);
      return queueNumber;
    }
    else {
      const queueNumber = newTicketCode.concat(newTicketDigit[0], newTicketDigit[1]);
      return queueNumber;
    }

  }

  getQueueDetailByeventIdAndUserId(eventId: any, userId: any): any {

    const queueDetails = this.repo.find({ where: { idEvent: eventId, idUser: userId } });
    return queueDetails;

  }

  getQueueDetailByEventId(eventId: any): any {
    const queueDetails = this.repo.find({ where: { idEvent: eventId } });
    return queueDetails;
  }

}
