import { ApiPropertyOptional } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsOptional, MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';

@Entity()
export class Event extends BaseEntity {
    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: true })
    eventName?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: true })
    location?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: true })
    description?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: true })
    logo?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('int', { nullable: true })
    visitorCount?: number;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('text', { nullable: true })
    startDate?: Date;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('text', { nullable: true })
    endDate?: Date;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: true })
    attentionTime?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: true })
    currentlyBeingAttended?: string;


}

/**
 * attentionTime, currentlyBeingAttended,
    startDate,endDate
 */
