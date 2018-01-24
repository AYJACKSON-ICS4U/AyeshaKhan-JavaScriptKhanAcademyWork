/* Create table about the people and what they do here */

CREATE TABLE stars (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT, birthday TEXT);

INSERT INTO stars (name, phone, birthday) VALUES("hula", "6475665-90", "10-02-1979");
INSERT INTO stars (name, phone, birthday) VALUES("buka", "6437665-90", "4-03-1955");
INSERT INTO stars (name, phone, birthday) VALUES("gouda", "64090065-90", "13-12-1200");
INSERT INTO stars (name, phone, birthday) VALUES("gadu", "6455675-90", "12-06-2000");
INSERT INTO stars (name, phone, birthday) VALUES("taro", "3455783-90", "11-11-1560");
INSERT INTO stars (name, phone, birthday) VALUES("hiluo", "1546735-90", "30-02-1890");
INSERT INTO stars (name, phone, birthday) VALUES("guava", "2456744-90", "10-02-6070");
INSERT INTO stars (name, phone, birthday) VALUES("huava", "5234544-90", "11-04-1234");
INSERT INTO stars (name, phone, birthday) VALUES("uhgu", "3662342-90", "10-08-7890");
INSERT INTO stars (name, phone, birthday) VALUES("opula", "8865782-90", "10-01-1964");
INSERT INTO stars (name, phone, birthday) VALUES("retro", "1245632-90", "23-02-1978");

CREATE TABLE movies (id INTEGER PRIMARY KEY AUTOINCREMENT, movie_id INTEGER, name TEXT);

INSERT INTO movies (movie_id, name) VALUES (1, "Merlock");
INSERT INTO movies (movie_id, name) VALUES (2, "Spider-Man");
INSERT INTO movies (movie_id, name) VALUES (3, "Yuluhu");
INSERT INTO movies (movie_id, name) VALUES (4, "Terat");
INSERT INTO movies (movie_id, name) VALUES (5, "The Revenant");

CREATE TABLE movie_stars (id INTEGER PRIMARY KEY, star_id INTEGER, movie_id INTEGER);

INSERT INTO movie_stars (star_id, movie_id) VALUES (1, 1);
INSERT INTO movie_stars (star_id, movie_id) VALUES (2, 1);
INSERT INTO movie_stars (star_id, movie_id) VALUES (6, 1);
INSERT INTO movie_stars (star_id, movie_id) VALUES (8, 1);
INSERT INTO movie_stars (star_id, movie_id) VALUES (3, 2);
INSERT INTO movie_stars (star_id, movie_id) VALUES (4, 2);
INSERT INTO movie_stars (star_id, movie_id) VALUES (5, 3);
INSERT INTO movie_stars (star_id, movie_id) VALUES (7, 4);
INSERT INTO movie_stars (star_id, movie_id) VALUES (9, 5);
INSERT INTO movie_stars (star_id, movie_id) VALUES (10, 4);
INSERT INTO movie_stars (star_id, movie_id) VALUES (11, 1);

/* see stars name with movie */

SELECT a.name, b.name FROM movie_stars
    JOIN stars as a
    ON a.id = movie_stars.star_id
    JOIN movies as b
    ON b.movie_id = movie_stars.movie_id;

