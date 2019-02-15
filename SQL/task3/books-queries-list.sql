select database();
use library;
update `books` SET `price`='350.00' where `id`=1; 
update `books` SET `price`='100.50' where `id`=2;
update `books` SET `price`='1250.70' where `id`=3; 
update `books` SET `price`='755.00' where `id`=4; 
update `books` SET `price`='699.99' where `id`=5; 
update `books` SET `price`='490.30' where `id`=6; 
update `books` SET `price`='599.99' where `id`=7; 
update `books` SET `price`='625.00' where `id`=8; 
update `books` SET `price`='200.00' where `id`=9; 
update `books` SET `price`='135.00' where `id`=10; 
update `books` SET `price`='350.70' where `id`=11; 
update `books` SET `price`='425.00' where `id`=12; 
update `books` SET `price`='1620.00' where `id`=13; 
update `books` SET `price`='825.60' where `id`=14;
update `books` SET `price`='425.00' where `id`=15;
update `books` SET `price`='800.00' where `id`=16;
update `books` SET `price`='1500.00' where `id`=17;
update `books` SET `price`='210.00' where `id`=18;
update `books` SET `price`='1000.00' where `id`=19;
update `books` SET `price`='999.00' where `id`=20;
update `books` SET `price`='365.00' where `id`=21;
update `books` SET `price`='820.60' where `id`=22;
update `books` SET `price`='900.90' where `id`=23;
update `books` SET `price`='1499.99' where `id`=24;
update `books` SET `price`='350.00' where `id`=25;
-- Queries list
-- query1
select * from books;
-- query2
update `books` SET `author-surname`='Пастухов' where `id`=7;
update `books` SET `author-surname`='Вейд' where `id`=16;
-- query3
SELECT COUNT(`author-awards`) FROM `books` WHERE `author-awards` IS NOT NULL;
-- query4
SELECT * FROM books WHERE `number-of-pages` IN (SELECT MIN(`number-of-pages`) FROM books);
-- query5
SELECT MAX(`number-of-pages`) FROM books;
-- query6
SELECT AVG(price) AS Price FROM books;
-- query7
SELECT SUM(`price`) FROM books WHERE `category` = 'C++';
-- query8
SELECT MIN(`price`) FROM books;
-- query9
SELECT * FROM books WHERE `price` IN (SELECT MIN(`price`) FROM books);
-- query10
SELECT * FROM books WHERE round(price, 4) ORDER BY `book-name`;
-- query11
SELECT * FROM `books` ORDER BY `date-of-publication` LIMIT 5,5;
SELECT * FROM `books` ORDER BY `date-of-publication` LIMIT 10,6;
-- query12
SELECT * FROM `books` WHERE `category` LIKE 'PHP';
SELECT * FROM `books` WHERE `book-name` LIKE '% Windows %';
SELECT * FROM `books` WHERE `isbn` LIKE '978%';
-- query13
SELECT * FROM `books` WHERE `price` BETWEEN '200' AND '900';
SELECT * FROM `books` WHERE `price` NOT BETWEEN '400' AND '600';
-- query14
DELETE FROM `books` WHERE `id` = 6;
SELECT * FROM `books`;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM `books` WHERE `book-name` = 'РНР глазами  хакера';
SET SQL_SAFE_UPDATES = 1;
SELECT * FROM `books`;
DELETE FROM `books` WHERE `isbn` = '978-1-849513-50-0';
SELECT * FROM `books`;

