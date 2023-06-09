CREATE TABLE todos(
    id SERIAL UNIQUE PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    description VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE users(
    id SERIAL UNIQUE PRIMARY KEY,
    username VARCHAR(25) UNIQUE,
    password VARCHAR(255) NOT NULL
);
