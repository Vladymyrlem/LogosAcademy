DROP DATABASE IF EXISTS library_1;
CREATE DATABASE library_1 CHAR SET utf8;
USE library_1;
CREATE TABLE `books` (
  `id` int(3) NOT NULL,
  `book-name` char(125) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` double NOT NULL DEFAULT '0',
  `isbn` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `author` (
`id_author` int(3) NOT NULL,
  `author-name` char(125) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author-surname` char(125) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` char(125) NOT NULL,
  `author-birthday` date NOT NULL DEFAULT '2018-01-01'
  
);
CREATE TABLE `genres` (
`id_genre` int(3) NOT NULL,
  `genre-name` char(125) NOT NULL,
  FOREIGN KEY (id_genre)
      REFERENCES books(id)
);
INSERT INTO `books` (`id`, `book-name`, `description`, `price`, `isbn`) VALUES
();
INSERT INTO `author` VALUES
();

INSERT INTO `genres` VALUES
();

ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `isbn` (`isbn`);
  
  ALTER TABLE `author`
  ADD PRIMARY KEY (`id_author`),
  ADD UNIQUE KEY `email` (`email`);
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id_genre`);
  ALTER TABLE `genres` ADD INDEX(`genre-name`);
  ALTER TABLE genres ADD foreign key (id_genre)   REFERENCES books(id);
  ALTER TABLE `books`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

COMMIT;