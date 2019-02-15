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
`bank_account_clients` char(125) NOT NULL 
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
`client_phone` char(25) DEFAULT '380501234567'
);

CREATE TABLE `employees`(
`id_employee` int(25) NOT NULL,
`id_post` int(25) NOT NULL,
`employee_name` char(125) NOT NULL,
`employee_surname` char(125) NOT NULL,
`birthday` date NOT NULL DEFAULT '2018-01-01',
`sex` char(7) DEFAULT 'female',
`employee_adr` char(125) NOT NULL,
`employee_phone` char(25) DEFAULT '380501234567' NOT NULL,
`employee_education` char(25) NOt NULL
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
  
  /*Table Category*/
INSERT INTO `category_number`(`id_category`, `category`, `number_code`, `count_places`, `count_room`, `price`, `description`) VALUES 
(1,'single',1,1,1,100,'Однокомнатный номер для одного человека с одной кроватью. 
Небольшой размер номера и простая обстановка'),
(2,'double_room',2,2,1,175,'Двухместный номер
с одной большой кроватью'),
(3,'twin',3,4,1,350,'Однокомнатный номер для двух человек с двумя отдельными односпальными кроватями. 
Стандартный размер номера и интерьер.'),
(4,'triple',4,3,1, 275, '	Однокомнатный номер для трех человек с одной двуспальной кроватью и одной односпальной (EXB) или с тремя отдельными односпальными кроватями. 
Стандартный размер номера и интерьер. Иногда размер номера больше стандартного.'),
(5,'quadriple',5,4,1,310,'	Однокомнатный номер для четырех человек с одной двуспальной кроватью и двумя односпальными или с четыремя отдельными односпальными кроватями. 
Стандартный размер номера и интерьер. Часто размер номера больше стандартного.');
/*Table Clients*/
INSERT INTO `client`(`id_client`,`id_reg`,`name`,`surname`,`birthday`,`sex`,`passport_data`,`client_phone`)
VALUES
(1,1,'Гаркуша','Анджела','2000-04-19','female','ВН113475, виданий 20.02.2016','380501751592'),
(2,2,'Шевченко','Сергей','1976-06-14','male','ЕА241821, виданий 15,06,1992','380631251417'),
(3,5,'Баранов','Вячеслав','1959-06-01','male','УС235186, виданий 10.06.1975','380501145119'),
(4,8,'Бондаренко','Мария','1981-03-06','female','ВИ127351, виданий 09.03.1997','380671851712');

/*Table Children*/
INSERT INTO `children`(`id_children`, `id_client`, `child_name`, `child_surname`, `birthday`) 
VALUES (5,5,'Шевченко', 'Даша', '2007-07-18'),
(6,6,'Бондаренко', 'Михаил', '2009-07-18');

/*Table cleaning*/
INSERT INTO `cleaning`(`id_cleaning`, `id_employee`, `id_hot_number`, `cleaning_date`, `cleaning_time`) 
VALUES 
(2,3,312,'2018-03-17', '9:00'),
(3,6,412,'2018-10-15','12:30'),
(5,5,255,'2019-01-09','8:00');

/*Table Employees*/
INSERT INTO `employees`(`id_employee`, `id_post`, `employee_name`, `employee_surname`, `birthday`, `sex`, `employee_adr`, `employee_phone`, `employee_education`) 
VALUES
(7,1,'Надежда','Майборода','1978-10-27','female','г.Киев, ул. Мира,27/107','38(067)1341517','Магистр'),
(8,2,'Назар','Гончар','1983-07-07','male','г.Киев,пер. Гетьмана, 47/25','38(050)4421838','Магистр'),
(9,3,'Елена','Иващенко','1993-11-17','female','г. Житомир, ул. Мира, 21/18','38(050)8751718','Среднее'),
(10,4,'Генадий','Назаренко','1989-03-11','male','г. Кривой Рог,ул. Шевченка, 151/13','38(063)1511527','Бакалавр'),
(11,3,'Анастасия','Губенко','1978-04-07','female','г.Львов, ул. Соборности, 15/25','38(067)5601719','Бакалавр'),
(12,3,'Ольга','Щуровская','1980-11-17','female','г.Сумы, ул. Гоголя, 21/24','38(050)2701518','Среднее');

/*Table hotel number*/
INSERT INTO `hotel_number`(`id_hot_number`, `id_category`, `number_status`, `req_cleaning`) 
VALUES
(310,2,'zanyat','no'),
(255,5,'svoboden','yes'),
(312,2,'svoboden','yes'),
(206,3,'svoboden','no'),
(412,3,'svoboden','yes');

/*Table Post*/
INSERT INTO `hotel`.`post`
(`id_post`,`post_name`)
VALUES
(1,'Администратор'),
(2,'Менеджер по работе  клиентами'),
(3,'Горничная'),
(4,'Портье');

/*Table Registration*/
INSERT INTO `hotel`.`registration`
(`id_reg`,`id_hot_number`,`id_employee`,`arrival_date`,`departure_date`,`summa`,`bank_account_clients`)
VALUES
(1,312,2,'2018-03-17','2018-03-21','700','2817141495172175'),
(2,255,2,'2019-01-09','2019-01-11','620','5215173128726716'),
(5,412,1,'2018-10-15','2018-10-20','1750','8516271715163134'),
(8,206,2,'2018-05-22','2018-05-24','700','8217550124132417');

/*Table Requisities*/
INSERT INTO `hotel`.`requisites`(`hotel_name`,`hotel_adr`, `hotel_phone`,`bank_account`) VALUES
('Хілтон', 'м. Київ, вул. Шухевича 59', '0442335116', 'МФО 323157, Р/Р 25100012371, філіал АТ"Ощадбанк"');
ALTER TABLE `registration` CHANGE `bank_account_clients` `bank_account_clients` CHAR(25) NOT NULL;
ALTER TABLE hotel_number ADD foreign key (id_category)   REFERENCES category_number(id_category);

ALTER TABLE  children ADD foreign key (id_client)   REFERENCES `client`(id_client);
ALTER TABLE hotel_number ADD foreign key (id_hot_number) REFERENCES cleaning(id_cleaning);

ALTER TABLE  employees ADD foreign key (id_post)   REFERENCES post(id_post);
ALTER TABLE cleaning  ADD foreign key (id_employee)   REFERENCES employees(id_employee);
ALTER TABLE `client` ADD foreign key (id_reg) REFERENCES registration(id_reg);
ALTER TABLE registration ADD foreign key (id_employee) REFERENCES employees(id_employee);
ALTER TABLE registration ADD foreign key (id_hot_number) REFERENCES hotel_number(id_hot_number);
