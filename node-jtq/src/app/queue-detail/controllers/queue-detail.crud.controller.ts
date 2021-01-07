import { Body, Controller, Post } from '@nestjs/common';
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
@Controller('queue-detail/queue-details')
export class QueueDetailCrudController {
  constructor(public service: QueueDetailCrudService) { }

  @Post('join-queue')
  async join(@Body() queueDTO: any): Promise<QueueDetail> {

    const token = await this.service.joinQueue(queueDTO);
    // res.setHeader('Authorization', 'Bearer ' + token); 
    // res.status(200).send();
    return token;
  }
}
