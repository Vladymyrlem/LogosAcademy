DROP DATABASE IF EXISTS hotel;
CREATE DATABASE hotel CHAR SET utf8;
USE hotel;

CREATE TABLE `requisites`(
  `hotel_name` char(125) NOT NULL,
  `hotel_adr` char(250) NOT NULL,
  `hotel_phone` int(15),
  `bank_account` int(25)
);
CREATE TABLE `registration`(
`id_reg` int(5) NOT NULL,
`id_hot_number` int(5) NOT NULL,
`id_employee` int(25) NOT NULL,
`arrival_date` date NOT NULL DEFAULT '2018-01-01',
`departure_date` date NOT NULL DEFAULT '2018-01-01',
`summa` int(125) NOT NULL,
`bank_account_clients` int(125) NOT NULL 
);
CREATE TABLE `children`(
`id_children` int(25) NOT NULL,
`id_client` int(25) NOT NULL,
`child_name` char(125)  NOT NULL,
`child_surname` char(125) NOT NULL,
`birthday` date NOT NULL DEFAULT '2018-01-01'
);
CREATE TABLE `client`(
`id_client` int(25) NOT NULL,
`id_reg`int(5) NOT NULL,
`name` char(125)  NOT NULL,
`surname` char(125)  NOT NULL,
`birthday` date NOT NULL DEFAULT '2018-01-01',
`sex` char(7) NOT NULL DEFAULT 'female',
`passport_data` char(125) NOT NULL,
`client_phone` int(25) DEFAULT '1234567890'
);

CREATE TABLE `employees`(
`id_employee` int(25) NOT NULL,
`id_post` int(25) NOT NULL,
`employee_name` char(125) NOT NULL,
`employee_surname` char(125) NOT NULL,
`birthday` date NOT NULL DEFAULT '2018-01-01',
`sex` char(7) DEFAULT 'female',
`employee_adr` char(125) NOT NULL,
`employee_phone` int(25) DEFAULT '1234567890' NOT NULL,
`employee_education` int(25) NOt NULL
);
CREATE TABLE `hotel_number`(
`id_hot_number` int(25) NOT NULL,
`id_category` int(25) NOT NULL,
`number_status` char(125) NOT NULL,
`req_cleaning` char(10) DEFAULT 'Yes' NOT NULL
);
CREATE TABLE `category_number`(
`id_category` int(25) NOT NULL,
`category` char(125) NOT NULL,
`number_code` int(25) NOT NULL,
`count_places` int(25) NOT NULL,
`count_room` int(25) NOT NULL,
`price` double DEFAULT '0.0000' NOt NULL,
`description` char(250) NOT NULL
);
CREATE TABLE `cleaning`(
`id_cleaning` int(25),
`id_employee` int(25) NOT NULL,
`id_hot_number` int(25) NOT NULL,
`cleaning_date` date NOT NULL DEFAULT '2018-01-01',
`cleaning_time` time NOT NULL DEFAULT '12:00:00'
);
CREATE TABLE `post`(
`id_post` int(25) NOT NULL,
`post_name` char(125) NOT NULL
);
ALTER TABLE registration
  ADD PRIMARY KEY (`id_reg`);
  ALTER TABLE category_number
  ADD PRIMARY KEY(`id_category`);
    ALTER TABLE cleaning
  ADD PRIMARY KEY(`id_cleaning`);
    ALTER TABLE hotel_number
  ADD PRIMARY KEY(`id_hot_number`);
      ALTER TABLE `client`
  ADD PRIMARY KEY(`id_client`);
    ALTER TABLE post
  ADD PRIMARY KEY(`id_post`);
    ALTER TABLE employees
  ADD PRIMARY KEY(`id_employee`);
    ALTER TABLE `client`
  ADD PRIMARY KEY(`id_client`);
    ALTER TABLE children
  ADD PRIMARY KEY(`id_children`);
  /*Foreigns keys*/
ALTER TABLE hotel_number ADD foreign key (id_category)   REFERENCES category_number(id_category);
ALTER TABLE  children ADD foreign key (id_client)   REFERENCES `client`(id_client);
ALTER TABLE hotel_number ADD foreign key (id_hot_number) REFERENCES cleaning(id_cleaning);

ALTER TABLE  employees ADD foreign key (id_post)   REFERENCES post(id_post);
ALTER TABLE cleaning  ADD foreign key (id_employee)   REFERENCES employees(id_employee);
ALTER TABLE `client` ADD foreign key (id_reg) REFERENCES registration(id_reg);
ALTER TABLE registration ADD foreign key (id_employee) REFERENCES employees(id_employee);
ALTER TABLE registration ADD foreign key (id_hot_number) REFERENCES hotel_number(id_hot_number);
