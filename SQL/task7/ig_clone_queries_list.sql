select database();
ALTER TABLE `users` CHANGE `last_ip` `last_ip` VARCHAR(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;
/*Users new values*/
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (36, 'aduckham0', 'aduckham0@e-recht24.de', '3kIIF8u', 'Anallise', 'Duckham', '204.24.64.197', '2015-09-29', '2012-05-17');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (37, 'kwherrett1', 'kwherrett1@cbc.ca', 'VPAnGy9', 'Kendal', 'Wherrett', '252.37.69.196', '2013-09-17', '2012-12-17');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (38, 'rhecks2', 'rhecks2@posterous.com', 'Any3c7A', 'Rourke', 'Hecks', '245.99.244.158', '2016-05-20', '2011-06-22');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (39, 'cgreenrodd3', 'cgreenrodd3@wordpress.com', 'Wn2K6GQLEZ', 'Catharina', 'Greenrodd', '23.17.192.103', '2015-04-08', '2017-03-24');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (40, 'mphelp4', 'mphelp4@skyrock.com', 'avdTkTZrFI1v', 'Mathias', 'Phelp', '42.12.69.147', '2015-11-25', '2013-07-27');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (41, 'nbobasch5', 'nbobasch5@people.com.cn', '5FBhD8MVuY', 'Nels', 'Bobasch', '16.100.86.191', '2015-08-03', '2017-04-13');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (42, 'tmarsters6', 'tmarsters6@mapy.cz', 'MkHhUmq', 'Thurstan', 'Marsters', '79.89.139.184', '2012-12-18', '2013-03-27');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (43, 'cgrimsey7', 'cgrimsey7@vk.com', 'LyVDzYM', 'Chaim', 'Grimsey', '183.97.247.83', '2011-02-24', '2016-09-17');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (44, 'lgibbins8', 'lgibbins8@bbb.org', 'KYz99aOxQ', 'Leroy', 'Gibbins', '175.4.100.119', '2015-08-01', '2011-04-27');
insert into `users` (`user_id`, `username`, `email`, `salted_password`, `first_name`, `last_name`, `last_ip`, `date_created`, `date_updated`) values (45, 'wzannolli9', 'wzannolli9@bloglovin.com', 'VlbeZZJR', 'Westleigh', 'Zannolli', '73.165.86.134', '2016-12-12', '2016-11-14');

/*Photos new values*/
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (51, 36, 'vel pede morbi porttitor', 52.1567272, 17.1602866, 'http://dummyimage.com/185x155.jpg/cc0000/ffffff', 75, '2011-08-25', '2018-10-25');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (52, 37, 'ut suscipit a', 56.0467, 59.6086, 'http://dummyimage.com/249x188.bmp/5fa2dd/ffffff', 44, '2015-07-26', '2017-06-12');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (53, 38, 'in quis justo maecenas rhoncus', 52.5077777, 5.4757709, 'http://dummyimage.com/129x196.bmp/ff4444/ffffff', 48, '2016-02-10', '2018-08-25');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (54, 39, 'placerat ante nulla justo aliquam quis turpis eget elit sodales', 12.7494718, 4.5366582, 'http://dummyimage.com/247x191.bmp/ff4444/ffffff', 74, '2010-06-14', '2011-08-25');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (55, 40, 'ultrices posuere cubilia', 6.2012073, -1.6912512, 'http://dummyimage.com/222x141.png/ff4444/ffffff', 39, '2012-11-17', '2014-01-14');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (56, 41, 'justo nec condimentum neque sapien placerat ante nulla justo aliquam', 52.9369158, -66.9238331, 'http://dummyimage.com/157x122.jpg/5fa2dd/ffffff', 24, '2016-11-17', '2017-09-03');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (57, 42, 'porttitor lacus at turpis donec posuere metus vitae', 48.5271841, 7.7424053, 'http://dummyimage.com/112x173.png/cc0000/ffffff', 16, '2011-04-09', '2014-11-22');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (58, 43, 'ut mauris eget massa tempor convallis nulla neque libero', 41.375722, 121.781518, 'http://dummyimage.com/149x169.png/cc0000/ffffff', 20, '2012-12-01', '2013-06-18');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (59, 44, 'porttitor lorem id ligula suspendisse ornare consequat lectus in', -6.3818749, 105.8862812, 'http://dummyimage.com/100x190.bmp/cc0000/ffffff', 55, '2018-12-10', '2019-01-07');
insert into `photos` (`photo_id`, `user_id`, `caption`, `latitude`, `longitude`, `image_path`, `image_size`, `date_created`, `date_updated`) values (60, 45, 'metus aenean fermentum donec ut mauris eget massa', 20.1453986, -77.4300357, 'http://dummyimage.com/123x196.jpg/5fa2dd/ffffff', 39, '2014-01-10', '2015-03-20');

/*Messages new values*/
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (51, 36, 51, 'luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (52, 37, 52, 'phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (53, 38, 53, 'sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (54, 39, 54, 'pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (55, 40, 55, 'eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (56, 41, 56, 'eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (57, 42, 57, 'luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (58, 43, 58, 'integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (59, 44, 59, 'sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum');
insert into `messages` (`message_id`, `user_id`, `photo_id`, `message_content`) values (60, 45, 60, 'nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla');

/*Album new values*/
insert into `albums` (`album_id`, `title`, `photo_id`) values (21, 'mus etiam vel', 1);
insert into `albums` (`album_id`, `title`, `photo_id`) values (2, 'mauris sit amet eros suspendisse', 2);
insert into `albums` (`album_id`, `title`, `photo_id`) values (23, 'vehicula consequat morbi a ipsum integer a nibh', 3);
insert into `albums` (`album_id`, `title`, `photo_id`) values (23, 'posuere metus vitae ipsum aliquam non mauris morbi non', 4);
insert into `albums` (`album_id`, `title`, `photo_id`) values (24, 'tellus nisi eu orci mauris lacinia sapien quis libero', 5);
insert into `albums` (`album_id`, `title`, `photo_id`) values (25, 'posuere nonummy integer non velit donec diam neque vestibulum eget', 6);
insert into `albums` (`album_id`, `title`, `photo_id`) values (26, 'tempor convallis nulla neque libero convallis', 7);
insert into `albums` (`album_id`, `title`, `photo_id`) values (27, 'erat quisque erat eros viverra eget congue eget semper', 8);
insert into `albums` (`album_id`, `title`, `photo_id`) values (28, 'enim sit amet nunc viverra dapibus nulla suscipit', 9);
insert into `albums` (`album_id`, `title`, `photo_id`) values (29, 'sit amet consectetuer adipiscing elit', 10);


/*Queries*/
/*Add columns is_deleted*/
ALTER TABLE `users` ADD `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE AFTER `date_updated`;
ALTER TABLE `photos` ADD `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE AFTER `date_updated`;
ALTER TABLE `messages` ADD `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE AFTER `photo_id`;

UPDATE users SET `is_deleted` = true  WHERE `user_id` IN(13,8,22,41,17);
UPDATE messages SET `is_deleted` = true  WHERE `user_id` IN(13,8,22,41,17);
UPDATE photos SET `is_deleted` = true  WHERE `user_id` IN(13,8,22,41,17);
SELECT * FROM users WHERE `is_deleted` = true;
SELECT count(*) FROM users WHERE `is_deleted` = true;
SELECT username, first_name, last_name FROM users WHERE `is_deleted` = false ORDER BY date_updated;
SELECt * FROM users WHERE last_ip LIKE('24%') ORDER BY date_created;
SELECT * FROM users WHERE `is_deleted` = false AND user_id = 13;
SELECT * FROM users WHERE `is_deleted` = false AND user_id = 32;
SELECT * FROM users WHERE `is_deleted` = false AND email LIKE('bpirelli0%');
SELECT * FROM users WHERE `is_deleted` = false  AND date_created BETWEEN '2014-0101' AND '2017-01-07' ORDER BY date_created;

SELECT * FROM photos  ph 
JOIN ig_clone.users us ON ph.user_id = us.user_id 
AND ph.is_deleted = false
AND us.is_deleted = false
AND us.user_id IN(16,17,27); 

SELECT * FROM messages msg
INNER JOIN users us ON msg.user_id = us.user_id
AND us.is_deleted = false
AND message_id = 15; 

SELECT * FROM messages msg
INNER JOIN users us ON msg.user_id = us.user_id
AND us.is_deleted = false
AND message_id BETWEEN 7 AND 11; 
