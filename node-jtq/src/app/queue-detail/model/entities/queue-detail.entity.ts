import { ApiPropertyOptional } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsOptional, MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../../core/user/model/entities/user.entity';
import { Event } from '../../../event/model/entities/event.entity';
import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';

@Entity()
export class QueueDetail extends BaseEntity {
    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(5)
    @Column('varchar', { length: 5, nullable: true })
    queueNumber?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('datetime', { nullable: true })
    creationTime?: Date;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('datetime', { nullable: true })
    startTime?: Date;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('datetime', { nullable: true })
    endTime?: Date;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('datetime', { nullable: true })
    minEstimatedTime?: Date;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'idUser', referencedColumnName: 'id' })
    user?: User;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @ManyToOne(() => Event)
    @JoinColumn({ name: 'idEvent', referencedColumnName: 'id' })
    event?: Event;

}

/**
 * queueNumber, creationTime, startTime, endTime, minEstimatedTime,
                idVisitor, idEvent
 */
