import { hash, genSalt } from 'bcrypt';
import { MigrationInterface, QueryRunner } from "typeorm";
import { roles } from '../app/core/auth/model/roles.enum';

export class InsertData1609824210187 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `INSERT INTO EVENT(id,
                eventName, location, description, logo,visitorCount, attentionTime, currentlyBeingAttended,
                startDate,endDate) VALUES(1, 'Indigo','Banglore','Biggest Color Fest', NULL,1, '5', 'Q001',
                '2021-02-02 00:01:00','2021-03-03 00:01:00');`,
        );
        await queryRunner.query(
            `INSERT INTO EVENT(id,
                eventName, location, description, logo,visitorCount, attentionTime, currentlyBeingAttended,
                startDate,endDate) VALUES(2, 'Food Fest','Banglore','Biggest Food Fest', NULL,0, '6', 'Q001',
                '2021-02-02 00:01:00','2021-03-03 00:01:00');`,
        );
        // await queryRunner.query(
        //     `INSERT INTO QUEUE_DETAIL(id, queueNumber, creationTime, startTime, endTime, minEstimatedTime, 
        //         idUser, idEvent) VALUES(1, 'Q001', (datetime('now')), (datetime('now')), NULL, (datetime('now')), 1,1);`,
        // );
        await queryRunner.query(`INSERT INTO USER(id, username, password, role) VALUES(?, ?, ?, ?);`, [
            1,
            'user',
            await hash('password', await genSalt(12)),
            roles.USER,
        ]);
        await queryRunner.query(`INSERT INTO USER(id, username, password, role) VALUES(?, ?, ?, ?);`, [
            2,
            'admin',
            await hash('admin', await genSalt(12)),
            roles.ADMIN,
        ]);
        await queryRunner.query(
            `INSERT INTO QUEUE_DETAIL(id, queueNumber, creationTime, startTime, endTime, minEstimatedTime, 
                idUser, idEvent) VALUES(1, 'Q001', (datetime('now')), (datetime('now')), NULL, (datetime('now')), 1,1);`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM EVENT`);
        await queryRunner.query(`DELETE FROM QUEUE_DETAIL`);
        await queryRunner.query(`DELETE FROM USER`);
    }

}
