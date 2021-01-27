import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1609824133465 implements MigrationInterface {
    name = 'CreateTables1609824133465'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), 
        "username" VARCHAR(255), "name" VARCHAR(255), "password" VARCHAR(255), "phoneNumber" VARCHAR(255), 
        "acceptedCommercial" BOOL DEFAULT '0', "acceptedTerms" BOOL DEFAULT '0', "role" integer NOT NULL DEFAULT (0))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), eventName VARCHAR(255), location VARCHAR(255), description VARCHAR(255), logo VARCHAR(255), visitorCount INTEGER, attentionTime VARCHAR(255),currentlyBeingAttended VARCHAR(255), 
        startDate text,endDate text)`);
        await queryRunner.query(`CREATE TABLE "queue_detail" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), queueNumber VARCHAR(5), creationTime datetime, startTime datetime, endTime datetime, minEstimatedTime datetime, 
        idUser BIGINT, idEvent BIGINT, 
        FOREIGN KEY(idUser) REFERENCES user(id), 
        FOREIGN KEY(idEvent) REFERENCES event(id))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "queue_detail"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
