CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int not null AUTO_INCREMENT,
    burger_name varchar(255) not null,
    burger_desc varchar(255),
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, burger_desc, devoured)
VALUES ("Baconator DoubleStax", "patty, cheese, bacon, patty, cheddar, bacon, ketchup", false);

INSERT INTO burgers (burger_name, burger_desc, devoured)
VALUES ("Carolina Classic", "patty, patty, coleslaw, chili, diced onion, mustard" false);

INSERT INTO burgers (burger_name, burger_desc, devoured)
VALUES ("The Beetcha-Like-It", "beet+blackbean patty, provolone, lettuce, tomato" false);