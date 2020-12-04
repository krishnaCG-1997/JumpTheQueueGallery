import { Visitor } from 'src/app/auth/models/visitor.model';
import { Events } from './event.modal';

export class QueueDetailCTO {
    id: string;
    queueNumber: string;
    creationTime: Date;
    startTime: Date;
    endTime: Date;
    minEstimatedTime: Date;
    visitor: Visitor;
    event: Events;
}