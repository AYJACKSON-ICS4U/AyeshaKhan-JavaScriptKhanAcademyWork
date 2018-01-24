CREATE TABLE store (id INTEGER PRIMARY KEY, name TEXT, author TEXT, price INTEGER, code INTEGER);

INSERT INTO store VALUES (1, "Hunger Games", "balaha", 200, 000);
INSERT INTO store VALUES (2, "wonder boy", "veluha", 1, 111);
INSERT INTO store VALUES (3, "cheesy", "peesy", 2, 111);
INSERT INTO store VALUES (4, "bler", "vler", 235, 111);
INSERT INTO store VALUES (5, "terta  ", "Mark", 33, 000);
INSERT INTO store VALUES (6, "Ceitera ", "Marma", 333, 111);
INSERT INTO store VALUES (7, "funnybunny ", "zeloo", 200, 111);
INSERT INTO store VALUES (8, "gerga  ", "sues", 6345, 000);
INSERT INTO store VALUES (9, "gerta  ", "sers", 11, 111);
INSERT INTO store VALUES (10, "Book 3 ", "a", 213, 000);
INSERT INTO store VALUES (11, "TAG ", "Markus Z", 223, 111);
INSERT INTO store VALUES (12, "funky  ", "terte", 432, 000);
INSERT INTO store VALUES (13, "gava ", "bava", 2234, 000);
INSERT INTO store VALUES (14, "book 1 ", "groovy", 765, 000);
INSERT INTO store VALUES (15, "Book 2 ", "proovy", 97, 111);

SELECT name FROM store ORDER BY price;
SELECT * FROM store WHERE price >= 300;
SELECT code, SUM(price) FROM store GROUP BY code;
SELECT * FROM store;
