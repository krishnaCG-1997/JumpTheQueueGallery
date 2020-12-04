INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial, 
acceptedTerms, userType) VALUES (0, 1, 'mike@mail.com', 'test', '1', '123456789', '0', '1', '1'); 
INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial, 
acceptedTerms, userType) VALUES (1, 1, 'peter@mail.com', 'test', '1', '123456789', '1', '1', '0'); 
INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial, 
acceptedTerms, userType) VALUES (2, 1, 'krishna@mail.com', 'test', '1', '123456789', '1', '1', '0'); 

INSERT INTO Event (id, modificationCounter, 
eventName, location, description, logo,visitorCount, attentionTime, 
startDate,endDate) VALUES (1, 1, 'Indigo','Banglore','Biggest Color Fest', NULL,2, '2021-02-01 00:01:00', 
'2021-01-01 00:01:00','2021-02-01 00:01:00');
INSERT INTO Event (id, modificationCounter, 
eventName, location, description, logo,visitorCount, attentionTime, 
startDate,endDate) VALUES (2, 1, 'Food Fest','Banglore','Biggest Food Fest', NULL,0, '2021-02-01 00:01:00', 
'2021-01-01 00:01:00','2021-02-01 00:01:00');


INSERT INTO QueueDetail (id, modificationCounter, 
queueNumber, creationTime, startTime, endTime, minEstimatedTime, 
idVisitor, idEvent) 
VALUES (1, 1, 'Q001', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '2', 1,1);
INSERT INTO QueueDetail (id, modificationCounter, 
queueNumber, creationTime, startTime, endTime, minEstimatedTime, 
idVisitor, idEvent) 
VALUES (2, 1, 'Q002', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '2', 0,1);