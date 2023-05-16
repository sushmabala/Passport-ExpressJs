CREATE DATABASE passport_verification;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    country_name VARCHAR(50),
    appointment_link VARCHAR(1000),
    application_link VARCHAR(1000),
    office_address VARCHAR(100)
    map VARCHAR(500)
);

-- INSERT INTO users(name,email) VALUES('Mike Towers','miketowers@gmail.com');
-- INSERT INTO users(name,email) VALUES('Kenneth Johnson','kennethjohnson@gmail.com');