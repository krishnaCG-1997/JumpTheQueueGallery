CREATE TABLE QueueDetail( id BIGINT NOT NULL AUTO_INCREMENT, modificationCounter INTEGER NOT NULL, 
queueNumber VARCHAR(5), creationTime TIMESTAMP, startTime TIMESTAMP, endTime TIMESTAMP, minEstimatedTime VARCHAR(20), 
idVisitor BIGINT NOT NULL, idEvent BIGINT NOT NULL, CONSTRAINT PK_AccessCode PRIMARY KEY(id), 
CONSTRAINT FK_QueueDetail_idVisitor FOREIGN KEY(idVisitor) REFERENCES Visitor(id), 
CONSTRAINT FK_QueueDetail_idEvent FOREIGN KEY(idEvent) REFERENCES Event(id));