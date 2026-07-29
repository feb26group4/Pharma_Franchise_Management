CREATE DATABASE IF NOT EXISTS p04_createdb;
USE p04_createdb;

-- 1. Create role table first
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name` (`role_name`)
);

-- 2. Create users table (references role)
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `role_id` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(15) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uname` (`uname`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `contact` (`contact`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  CONSTRAINT `users_chk_1` CHECK ((`email` like _utf8mb4'%_@__%.__%')),
  CONSTRAINT `users_chk_2` CHECK ((length(`contact`) between 10 and 15))
);

-- 3. Create franchise table (references users)
CREATE TABLE `franchise` (
  `fid` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `fname` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `regno` bigint NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`fid`),
  UNIQUE KEY `regno` (`regno`),
  KEY `uid` (`uid`),
  CONSTRAINT `franchise_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`)
);

-- 4. Create product_master table
CREATE TABLE `product_master` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `pname` varchar(100) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `packaging_unit` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `pname` (`pname`)
);

-- 5. Create product_stock table (references product_master)
CREATE TABLE `product_stock` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `pid` int NOT NULL,
  `manuf_date` date NOT NULL,
  `expiry_date` date NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`sid`),
  KEY `pid` (`pid`),
  CONSTRAINT `product_stock_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `product_master` (`pid`),
  CONSTRAINT `product_stock_chk_1` CHECK ((`expiry_date` > `manuf_date`)),
  CONSTRAINT `product_stock_chk_2` CHECK ((`price` >= 0)),
  CONSTRAINT `product_stock_chk_3` CHECK ((`quantity` >= 0))
);

-- 6. Create orders table (references users, franchise)
CREATE TABLE `orders` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `fid` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_mode` varchar(20) NOT NULL,
  PRIMARY KEY (`oid`),
  KEY `uid` (`uid`),
  KEY `fid` (`fid`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`fid`) REFERENCES `franchise` (`fid`),
  CONSTRAINT `orders_chk_1` CHECK ((`amount` >= 0)),
  CONSTRAINT `orders_chk_2` CHECK ((`payment_mode` in (_utf8mb4'cash',_utf8mb4'card',_utf8mb4'upi',_utf8mb4'netbanking',_utf8mb4'wallet')))
);

-- 7. Create order_details table (references product_master, orders, product_stock)
CREATE TABLE `order_details` (
  `odid` int NOT NULL AUTO_INCREMENT,
  `pid` int NOT NULL,
  `oid` int NOT NULL,
  `quantity` int NOT NULL,
  `date` date NOT NULL,
  `sid` int NOT NULL,
  PRIMARY KEY (`odid`),
  UNIQUE KEY `oid` (`oid`,`pid`),
  KEY `pid` (`pid`),
  KEY `order_details_ibfk_3_idx` (`sid`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `product_master` (`pid`),
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`oid`) REFERENCES `orders` (`oid`),
  CONSTRAINT `order_details_ibfk_3` FOREIGN KEY (`sid`) REFERENCES `product_stock` (`sid`),
  CONSTRAINT `order_details_chk_1` CHECK ((`quantity` > 0))
);

-- 8. Create payment_log table (references users)
CREATE TABLE `payment_log` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `wallet` decimal(10,2) NOT NULL,
  `payment_status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`payment_id`),
  KEY `uid` (`uid`),
  CONSTRAINT `payment_log_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `payment_log_chk_1` CHECK ((`wallet` >= 0))
);