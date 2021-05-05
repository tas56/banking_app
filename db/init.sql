CREATE DATABASE banking;
use banking;

CREATE TABLE IF NOT EXISTS accounts (
    `id` int AUTO_INCREMENT,
    `username` VARCHAR(21) CHARACTER SET utf8,
    `balance` NUMERIC(19, 2),
    PRIMARY KEY (`id`)
    );

CREATE TABLE IF NOT EXISTS transactions (
    `id` int AUTO_INCREMENT,
    `account_id` INT,
    `amount` NUMERIC(19, 4),
    `transaction_date` VARCHAR(255) CHARACTER SET utf8,
    `transaction_type` VARCHAR(21) CHARACTER SET utf8,
    PRIMARY KEY (`id`)
    );

INSERT INTO accounts (username,balance) VALUES
    ('Thomas Semiz', 900.00),
    ('John Smith', 375.00);

INSERT INTO transactions (account_id,amount,transaction_date,transaction_type) VALUES
    (1, 900.00, 'Wed May 05 2021 14:27:17 GMT-0400 (Eastern Daylight Time)', 'deposit'),
    (2, 375.00, 'Wed May 05 2021 14:27:17 GMT-0400 (Eastern Daylight Time)', 'deposit');