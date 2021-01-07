import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { subtract } from 'lodash';
import { Repository } from 'typeorm';
import { User } from '../../core/user/model/entities/user.entity';
import { Event } from '../../event/model/entities/event.entity';
import { QueueDetail } from '../model/entities/queue-detail.entity';

@Injectable()
export class QueueDetailCrudService extends TypeOrmCrudService<QueueDetail> {
  constructor(@InjectRepository(QueueDetail) repo: Repository<QueueDetail>,
    @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
    @InjectRepository(User) private readonly userRepository: Repository<User>) {
    super(repo);
  }

  async joinQueue(queue1: any): Promise<QueueDetail> {
    const eventId = queue1.eventId;
    const visitorId = queue1.visitorId;
    console.log(eventId);
    const eventDetail: Event | any = await this.getEventDetailById(eventId);


    const queue: QueueDetail = new QueueDetail();
    // const list :QueueDetail[]= await this.getListOfQueue(eId);
    //  if(list.length==0){
    //    queue.queueNumber="Q001"
    //  }
    //  else {
    //    const list1:QueueDetail = list.find();
    //    console.log(list1);
    //    const queueNo = parseInt(list1.queueNumber.substr(1));
    //  }
    queue.queueNumber = "Q035";
    queue.startTime = eventDetail!.startDate;
    queue.endTime = eventDetail!.endDate;
    queue.minEstimatedTime = await this.getMinimumEstimatedTime(eventDetail!.currentNumber, queue.queueNumber);
    this.userRepository.findOne(visitorId).then(data => {
      if (data != null) {
        queue.user = data;
      }
    });
    this.eventRepository.findOne(eventId).then(data => {
      if (data != null) {
        queue.event = data;
      }
    });
    const result = await this.repo.save(queue);
    console.log(result);
    return result;
  }

  async getEventDetailById(eId: any): Promise<Event | undefined> {
    console.log('3')
    const eventDetail = await this.eventRepository.findOne(eId);
    //Promise is showing pending
    console.log(eventDetail)
    return eventDetail;
  }

  async getMinimumEstimatedTime(currentNumber: String, queueNumber: String): Promise<any> {

    const currently = parseInt(currentNumber.substr(1));
    const queue1 = parseInt(queueNumber.substr(1));
    const currentTime = new Date().getTime();
    const queueTime = currentTime + subtract(queue1, currently) * 12000;
    return queueTime;
  }

}
