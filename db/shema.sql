DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

create table burgers(
    id int auto_increment,
    burger_name varchar (300) not null,
    devoured boolean,
    PRIMARY KEY(id)
);

select *
from burgers;


