CREATE DATABASE agencia;
USE agencia;

CREATE TABLE `autos`(
    `auto_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `matricula` varchar(50) DEFAULT NULL,
    `marca` varchar(50) DEFAULT NULL,
    `modelo` varchar(50) DEFAULT NULL,
    `potencia` int (10) DEFAULT NULL,
    `color` varchar(50) DEFAULT NULL,
    PRIMARY KEY(`auto_id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE `clientes`(
    `cliente_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50) DEFAULT  NULL,
    `apellido_paterno` varchar(50) DEFAULT NULL,
    `apellido_materno` varchar(50) DEFAULT NULL,
    `email` varchar(100) DEFAULT NULL,
    `telefono` int(15) DEFAULT NULL,
    `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`cliente_id`)
 ) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE `propietario`(
    `propietario_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `nombre` varchar(50) DEFAULT  NULL,
    `apellido_paterno` varchar(50) DEFAULT NULL,
    `apellido_materno` varchar(50) DEFAULT NULL,
    `email` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`propietario_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
