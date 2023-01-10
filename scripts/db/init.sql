CREATE TABLE company(
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE brand(
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  companyId INTEGER REFERENCES company(id) NOT NULL
);

CREATE TABLE car(
  id SERIAL NOT NULL,
  model VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  brandId INTEGER REFERENCES brand(id) NOT NULL
);

INSERT INTO company(id, name) VALUES (DEFAULT, 'One');
INSERT INTO company(id, name) VALUES (DEFAULT, 'Two');

INSERT INTO brand(id, name, companyId) VALUES (DEFAULT, 'One', 1);
INSERT INTO brand(id, name, companyId) VALUES (DEFAULT, 'Two', 2);

INSERT INTO car(id, model, brandId) VALUES (DEFAULT, 'One', 1);
INSERT INTO car(id, model, brandId) VALUES (DEFAULT, 'Two', 2);