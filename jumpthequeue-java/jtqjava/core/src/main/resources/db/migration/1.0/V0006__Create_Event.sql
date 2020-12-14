create table Event( id BIGINT NOT NULL AUTO_INCREMENT, modificationCounter INTEGER NOT NULL, 
eventName VARCHAR(255), location VARCHAR(255), description VARCHAR(255), logo VARCHAR(255), visitorCount INTEGER, attentionTime VARCHAR(255),currentlyBeingAttended VARCHAR(255), 
startDate TIMESTAMP,endDate TIMESTAMP, CONSTRAINT PK_Event PRIMARY KEY(id) );