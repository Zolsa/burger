DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` INTEGER auto_increment not null,
    `burger_name` VARCHAR (55) not null,
    `devoured` BOOLEAN DEFAULT FALSE,
    `date` TIMESTAMP not null,
    PRIMARY KEY (`id`)	
);