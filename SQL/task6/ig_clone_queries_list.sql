select database();
/*Queries list*/
SELECT * FROM users;
SELECT * FROM users WHERE last_ip LIKE '%18';
SELECT user_id,username FROM users WHERE username LIKE 'f%' ORDER BY username;
SELECT * FROM users WHERE date_created > '2015-01-01';
SELECT username,first_name,last_name FROM users WHERE date_created BETWEEN '2011-01-01' AND '2017-01-01' ORDER BY date_created;

SELECT * FROM photos ORDER BY date_created;
SELECT * FROM photos WHERE user_id = 3;
SELECT * FROM photos WHERE user_id IN(3,25,31,33) ORDER BY user_id;
SELECT * FROM photos ph RIGHT JOIN ig_clone.users us ON ph.user_id = us.user_id; 
SELECT * FROM photos WHERE image_size >100 ORDER BY image_size DESC;
SELECT * FROM photos  WHERE date_updated > '2014-01-01' ORDER BY date_updated;

SELECT * FROM messages WHERE message_content LIKE '%null%';
SELECT * FROM messages WHERE message_content LIKE '% null%ipsum%';
SELECT * FROM messages msg RIGHT JOIN users us ON msg.user_id = us.user_id; 
SELECT message_id,message_content FROM messages msg INNER JOIN photos ph ON msg.user_id = ph.photo_id; 
SELECT message_id,message_content FROM messages msg LEFT JOIN  photos ph ON msg.user_id = ph.user_id;

SELECT * FROM albums WHERE album_id = 14;
SELECT * FROM albums WHERE album_id IN(14,15,20) ORDER BY title;
SELECT * FROM albums WHERE photo_id = 2;
SELECT * FROM albums WHERE photo_id BETWEEN 5 AND 25 ORDER BY album_id DESC;
SELECT * FROM albums alb INNER JOIN messages msg ON alb.photo_id  = msg.photo_id;  
SELECT * FROM albums alb LEFT JOIN photos ph ON alb.photo_id  = ph.photo_id;  

