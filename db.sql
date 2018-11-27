use prosthesis;
DROP TABLE Users;
DROP TABLE Locations;
DROP TABLE Tokens;
DROP TABLE Posts;
DROP TABLE Quality;
DROP TABLE Prosthetics;

SELECT * FROM Users;
SELECT * FROM Locations;
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
	_created datetime default current_timestamp);

    insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(1, 0, 'Beth', 'beth17@gmail.com', 'leapfrog123', 4656457869);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(2, 1, 'Aladin', 'aladin21@gmail.com', 'psieuygbvdsj', 2746573909);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(3, 0, 'Henry', 'henry56@gmail.com', '858938fnn', 5038576934);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(4, 1, 'Sheryl', 'sheryl34@gmail.com', '9cueh37rs', 7587774938);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(5, 0, 'Peter', 'peterrabbit42@gmail.com', 'ksnruh73', 5542498762);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(6, 1, 'Larry', 'imnotapickle6@gmail.com', '029rufh4h5', 6665372235);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(7, 0, 'Susan', 'susan67@gmail.com', 'kshfiehrjvn', 8889995556);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(8, 1, 'Kevin', 'kevinspurts21@gmail.com', 'owowifh', 4949865644);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(9, 0, 'Oliver', 'twists31@gmail.com', 'llwidbrb', 9999999999);
insert into Users(addressid, donator_type, name, email, hash, phone_number)
values(10, 1, 'George', 'georgecurious19@gmail.com', 'eriuheio', 8889907864);

CREATE TABLE Addresses(
	id int not null auto_increment primary key,
    street_number int not null,
    street_name varchar(50) not null,
    city varchar(50) not null,
    zip_code int not null,
    _created datetime default current_timestamp);
    
CREATE TABLE Tokens(
	id int not null auto_increment primary key,
    userid int not null,
    _created datetime default current_timestamp);
    
CREATE TABLE Posts(
	id int not null auto_increment primary key,
    userid int not null, 
    item_name varchar(50) not null,
    description varchar(140),
    _created datetime default current_timestamp);
    
CREATE TABLE Quality(
	id int not null auto_increment primary key,
    quality varchar(20) not null,
    _created datetime default current_timestamp);

CREATE TABLE Prosthetics(
	id int not null auto_increment primary key,
    userid int not null,
    categoryid int not null,
	brand varchar(20) not null,
    part varchar(20) not null,
    placement varchar(20) not null,
    length int not null,
	width int not null,
    weight int not null,
    _created datetime default current_timestamp);
    
ALTER TABLE Prosthetics
ADD CONSTRAINT category_id
FOREIGN KEY (categoryid)
REFERENCES Categories(id);

ALTER TABLE Prosthetics 
ADD CONSTRAINT user_id
FOREIGN KEY (userid)
REFERENCES Users(id);


CREATE TABLE Categories(
	id int not null auto_increment primary key,
	name varchar(50) not null,
    _created datetime default current_timestamp);
    
CREATE TABLE User_posts(
	userid int not null,
    postid int not null,
    _created datetime default current_timestamp);
