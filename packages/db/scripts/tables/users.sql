CREATE TABLE Users(
    UserId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(250),
    EMail varchar(320) NOT NULL UNIQUE
);