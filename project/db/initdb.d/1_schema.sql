CREATE TABLE schedules (
    id INT NOT NULL AUTO_INCREMENT,
    date DATETIME NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    location TEXT,
    PRIMARY KEY (id)
);
-- CREATE TABLE usernames (
--     id: INT NOT NULL AUTO_INCREMENT,
--     description TEXT,
--     pass
--     PRIMARY KEY (id)
-- )
-- -- CREATE TABLE passwards (
--     id: id: INT NOT NULL AUTO_INCREMENT,
--     description TEXT,
--     PRIMARY KEY (id)
-- )