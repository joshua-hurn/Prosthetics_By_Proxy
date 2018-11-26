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
    donator_type binary,
	name varchar(50) not null,
	email varchar(50) not null,
    phone_number int not null,
	hash varchar(60) not null,
	_created datetime default current_timestamp);

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
    categoryid int not null,
	brand varchar(20) not null,
    part varchar(20) not null,
    placement varchar(20) not null,
    length int not null,
	width int not null,
    weight int not null,
    _created datetime default current_timestamp);
    
CREATE TABLE Categories(
	id int not null auto_increment primary key,
	name varchar(50) not null,
    _created datetime default current_timestamp);
    
CREATE TABLE User_posts(
	userid int not null,
    postid int not null,
    _created datetime default current_timestamp);