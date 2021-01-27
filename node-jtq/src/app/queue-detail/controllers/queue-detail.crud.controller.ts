import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { QueueDetail } from '../model/entities/queue-detail.entity';
import { QueueDetailCrudService } from '../services/queue-detail.crud.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: QueueDetail,
  },
})
@ApiTags('queue-detail')
@CrudType(QueueDetail)
@Controller('queue-detail/queue-details') //path
export class QueueDetailCrudController {
  constructor(public service: QueueDetailCrudService) { }


  @Post('join-queue')
  async joinQueue(@Body() queueDTO: any): Promise<QueueDetail | null> {

    const result = await this.service.joinQueue(queueDTO);
    return result;
  }

  @Get('fetchJoinedEvents/:id')
  async fetchJoinedEvents(@Param('id') id: number): Promise<QueueDetail> {
    const result = await this.service.fetchJoinedEvents(id);
    return result;
  }

  @Delete('leave-queue/:id')
  async leaveQueue(@Param('id') id: number): Promise<any> {
    console.log(id);
    const result = await this.service.leaveQueue(id);
    return result;
  }
}
