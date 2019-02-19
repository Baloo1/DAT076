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

ALTER TABLE "images" ADD FOREIGN KEY ("img_id") REFERENCES "users" ("img_id");

ALTER TABLE "descriptions" ADD FOREIGN KEY ("descr_id") REFERENCES "about_items" ("descr_id");

ALTER TABLE "about_items" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "descriptions" ADD FOREIGN KEY ("descr_id") REFERENCES "experience_items" ("descr_id");

ALTER TABLE "experience_items" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "projects" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "descriptions" ADD FOREIGN KEY ("descr_id") REFERENCES "projects" ("descr_id");

ALTER TABLE "images" ADD FOREIGN KEY ("img_id") REFERENCES "projects" ("img_id");