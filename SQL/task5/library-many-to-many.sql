SELECT database();
ALTER TABLE `books` ADD  FOREIGN KEY (`author_id`) REFERENCES `author`(`id_author`);

CREATE TABLE IF NOT EXISTS `library_1`.`books_has_author` (
  `books_id` INT(3) NOT NULL,
  `author_id` INT(3) NOT NULL,
  INDEX `fk_books_has_author_author1_idx` (`author_id_author` ASC) VISIBLE,
  INDEX `fk_books_has_author_books1_idx` (`books_id` ASC) VISIBLE
  );
  ALTER TABLE books_has_author ADD  FOREIGN KEY (`author_id_author`) REFERENCES `author`(`id_author`);
  ALTER TABLE books_has_author ADD  FOREIGN KEY (books_id) REFERENCES `books`(`id`);
