CREATE TABLE "logins" (
    "login_id" INT PRIMARY KEY,
    "email" varchar NOT NULL,
    "password" varchar NOT NULL,
    "user_id" INT
);

CREATE TABLE "users" (
  "user_id" INT PRIMARY KEY,
  "name" varchar NOT NULL,
  "img_id" INT,
  "permissions" INT,
  "phone" varchar,
  "website" varchar,
  "twitter" varchar
);

CREATE TABLE "images" (
  "img_id" INT PRIMARY KEY,
  "thumbnail_done" boolean DEFAULT FALSE
);

CREATE TABLE "descriptions" (
  "descr_id" INT PRIMARY KEY,
  "type" varchar,
  "title" varchar,
  "textbox" varchar
);

CREATE TABLE "about_items" (
  "about_id" INT PRIMARY KEY,
  "user_id" INT,
  "descr_id" INT,
  "order" INT,
  "public" boolean
);

CREATE TABLE "experience_items" (
  "expe_id" INT PRIMARY KEY,
  "user_id" INT,
  "descr_id" INT,
  "start_date" date,
  "end_date" date,
  "public" boolean
);

CREATE TABLE "projects" (
  "project_id" INT PRIMARY KEY,
  "user_id" INT,
  "descr_id" INT,
  "img_id" INT,
  "start_date" date,
  "end_date" date
);

ALTER TABLE "logins" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "users" ADD FOREIGN KEY ("img_id") REFERENCES "images" ("img_id");

ALTER TABLE "about_items" ADD FOREIGN KEY ("descr_id") REFERENCES "descriptions" ("descr_id");

ALTER TABLE "about_items" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "experience_items" ADD FOREIGN KEY ("descr_id") REFERENCES "descriptions" ("descr_id");

ALTER TABLE "experience_items" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "projects" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "projects" ADD FOREIGN KEY ("descr_id") REFERENCES "descriptions" ("descr_id");

ALTER TABLE "projects" ADD FOREIGN KEY ("img_id") REFERENCES "images" ("img_id");
