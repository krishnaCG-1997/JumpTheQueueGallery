import { Module } from '@nestjs/common';
import { QueueDetail } from './model/entities/queue-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueDetailCrudService } from './services/queue-detail.crud.service';
import { QueueDetailCrudController } from './controllers/queue-detail.crud.controller';
import { User } from '../core/user/model/entities/user.entity';
import { Event } from '../event/model/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QueueDetail, User, Event])],
  providers: [QueueDetailCrudService],
  controllers: [QueueDetailCrudController],
})
export class QueueDetailModule { }
