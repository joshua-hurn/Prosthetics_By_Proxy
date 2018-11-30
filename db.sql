use heroku_347278e04e43b49;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Addresses;
DROP TABLE IF EXISTS Tokens;
DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Quality;
DROP TABLE IF EXISTS Prosthetics;
DROP TABLE IF EXISTS Categories;

SELECT * FROM Users;
SELECT * FROM Addresses;
SELECT * FROM Tokens;
SELECT * FROM Posts;
SELECT * FROM Quality;
SELECT * FROM Prosthetics;

CREATE TABLE Users(
	id int not null auto_increment primary key,
    addressid int not null,
    donator_type tinyint,
	name varchar(50) not null,
	email varchar(50) not null,
    phone_number varchar(10) not null,
	hash varchar(60) not null,
	_created timestamp default current_timestamp);

insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(1, 0, 'Beth', 'beth17@gmail.com', '$2y$12$eUiz5/luVwKdr/VoNEzVB.MbqaPwB5whCB/ZSRiU6Rz29unkqb5bK', 4656457869);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(2, 1, 'Aladin', 'aladin21@gmail.com', '$2y$12$I5vfdB4yMIr2KkKLrpCrn.sCSAS2BAXW9/AzJgx6RfJwOccHnnSle', 2746573909);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(3, 0, 'Henry', 'henry56@gmail.com', '$2y$12$wANjUUzqtFtJANG3hrxQC.PGcpBtdbTesD64rllzU6zC/FqbvztJu', 5038576934);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(4, 1, 'Sheryl', 'sheryl34@gmail.com', '$2y$12$fy6loJZS6iJUbDBwdjAepOT0pB6r1d6vqMuPmvMk1RPPsHTYL4ksq', 7587774938);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(5, 0, 'Peter', 'peterrabbit42@gmail.com', '$2y$12$ac/Q15zSB07ffHMvRymz4.9TGk1QhHP2vs0R2D4S2kj8eNKQPGlve', 5542498762);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(6, 1, 'Larry', 'imnotapickle6@gmail.com', '$2y$12$5mVXaVIZ14O9d8Jq9r3mjes63cvSvbzqrNQtty.um13Pz4mH.gCsC', 6665372235);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(7, 0, 'Susan', 'susan67@gmail.com', '$2y$12$6XwRNRhl6eRX9hpigNrnX.BSFxLEVXjWgf4N56KCewcpFNDxC4hri', 8889995556);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(8, 1, 'Kevin', 'kevinspurts21@gmail.com', '$2y$12$BSjB6Um.4b8yM9Kb9meSPOpZv.m1h/Hy/Ri0lu4Jijo.9y3VHc.xq', 4949865644);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(9, 0, 'Oliver', 'twists31@gmail.com', '$2y$12$ZwibiqeXefEB25ZR5EuwPOA.VKY8zBmLmdiGUgJi7zhCRerS/eXpW', 9999999999);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(10, 1, 'George', 'georgecurious19@gmail.com', '$2y$12$aY4KAF/Mbllusskqa26vgu7jnHcY9lhxVPAXum/hz6azdrIOjsc3G', 8889907864);
INSERT INTO Users(addressid, donator_type, name, email, hash, phone_number)
VALUES(11, 0, 'Company', 'company@yahoo.net', 'password123', 2568122270);


CREATE TABLE Addresses(
	id int not null auto_increment primary key,
    street_number int not null,
    street_name varchar(50) not null,
    city varchar(50) not null,
    zip_code int not null,
    _created timestamp default current_timestamp);
    
CREATE TABLE Tokens(
	id int not null auto_increment primary key,
    userid int not null,
    _created timestamp default current_timestamp);
    
CREATE TABLE Posts(
	id int not null auto_increment primary key,
    userid int not null, 
    item_name varchar(50) not null,
    description varchar(140),
    _created timestamp default current_timestamp);
    
    INSERT INTO Posts(userid, item_name, description) 
VALUES(1, 'Hand', 'Fuly functional and never experienced any issues.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(2, 'Foot', 'A little wear and tear but nothing serious.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(3, 'Elbow', 'A well loved prothesis.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(4, 'Knee', 'Fuly functional and never experienced any issues.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(5, 'Eye', 'I still do not have twenty twenty vision.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(6, 'Sleeve', 'A slight tear here and there.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(7, 'Leg', 'Comfortable and easily attached.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(8, 'Arm', 'Take good care of it.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(9, 'Socket', 'Fuly functional and never experienced any issues.');
INSERT INTO Posts(userid, item_name, description)  
VALUES(10, 'Hand', 'Fuly functional and never experienced any issues.');

CREATE TABLE Quality(
	id int not null auto_increment primary key,
    quality varchar(20) not null,
    _created timestamp default current_timestamp);

    INSERT INTO Quality(quality)
VALUES('Excellent');
INSERT INTO Quality(quality)
VALUES('Fair');
INSERT INTO Quality(quality)
VALUES('Poor');
INSERT INTO Quality(quality)
VALUES('Poor');
INSERT INTO Quality(quality)
VALUES('Good');

CREATE TABLE Prosthetics(
	id int not null auto_increment primary key,
    userid int not null,
    prostheticid int not null,
	brand varchar(20) not null,
    part varchar(20) not null,
    placement varchar(20) not null,
    length int not null,
	width int not null,
    weight int not null,
    _created timestamp default current_timestamp);

    INSERT INTO Prosthetics(userid, prostheticid, brand, part, placement, length, width, weight)
VALUES(1, 1, 'SAFE', 'Socket', 'Upperlimb', 12, 5, 50);
INSERT INTO Prosthetics(userid, prostheticid, brand, part, placement, length, width, weight)
VALUES(2, 2, 'TruStep', 'Elbow Hinge', 'Upperlimb', 12, 5, 50);
INSERT INTO Prosthetics(userid, prostheticid, brand, part, placement, length, width, weight)
VALUES(3, 3, 'Quantum', 'Linner', 'Lowerlimb', 12, 5, 50);
INSERT INTO Prosthetics(userid, prostheticid, brand, part, placement, length, width, weight)
VALUES(4, 4, 'STEN', 'Suspension Mechanism', 'Lowerlimb', 12, 5, 50);
INSERT INTO Prosthetics(userid, prostheticid, brand, part, placement, length, width, weight)
VALUES(5, 5, 'Pathfinder', 'Knee Hinge', 'Lowerlimb', 12, 5, 50);
INSERT INTO Prosthetics(userid, prostheticid, brand, part, placement, length, width, weight)
VALUES(6, 6, 'Vari-Flex', 'Hand', 'Upperlimb', 12, 5, 50);
    
CREATE TABLE Categories(
	id int not null auto_increment primary key,
    categoryid int not null,
	name varchar(50) not null,
    _created timestamp default current_timestamp);

    INSERT INTO Categories(categoryid, name)
VALUES(1, 'Hand');
INSERT INTO Categories(categoryid, name)
VALUES(2, 'Foot');
INSERT INTO Categories(categoryid, name)
VALUES(3, 'Leg');
INSERT INTO Categories(categoryid, name)
VALUES(4, 'Arm');
    
CREATE TABLE User_posts(
	userid int not null,
    postid int not null,
    _created timestamp default current_timestamp);
    
CREATE TABLE Locations(
	id int not null auto_increment primary key,
    name varchar(60) not null,
    address varchar(80) not null,
    lat float(10, 6) not null,
    lng float(10, 6) not null,
    type varchar(30) not null
    )  ENGINE = MYISAM ;
