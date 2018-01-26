/* What does the app's SQL look like? */

CREATE TABLE clothes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT,
    design TEXT);
    
INSERT INTO clothes (type, design)
    VALUES ("Dress Shirt", "Deep Wine Red");
INSERT INTO clothes (type, design)
    VALUES ("Pants", "Black");
INSERT INTO clothes (type, design)
    VALUES ("blazer", "Jet Black");

alter table clothes add price integer;

select * from clothes;

update clothes set price = "35" where id=1;
update clothes set price = "20" where id=2;
update clothes set price = "45" where id=3;

select * from clothes;

insert into clothes (type, design, price)
    VALUES ("BLazer", "Deep Navy Blue", 40);
select * from clothes;
