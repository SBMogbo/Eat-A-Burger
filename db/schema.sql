CREATE DATABASE burger_db;
USE burger_db;
-- Create the burger.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);