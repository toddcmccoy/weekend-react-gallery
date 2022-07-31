CREATE DATABASE NAMED "react_gallery"

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (80) NOT NULL,
	"path" VARCHAR (80) NOT NULL,
	"description" VARCHAR (120) NOT NULL,
	"likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" (title, path, description) VALUES 

('Floki', 'images/floki-side-eye.jpg', 'Photo of our dog, Floki, giving me side eye.'),
('Freyja', 'images/freyja-sleeve.jpg', 'Photo of our first ferret, Freyja. So much mischief.'),
('Jasper', 'images/jasper.jpg', 'Photo of our ferret, Jasper. He liked whiskey.'),
('Dumpling', 'images/dumpling.jpg', 'Photo of our current cat, Dumpling.'),
('Rose', 'images/rose.jpg', 'Photo of my sweet cat, Rose.'),
('Rats', 'images/oli_nils.jpg', 'Photo of our rats, Oli and Nils.'),
('Thack', 'images/thackery_blep.jpg', 'Photo of our ferret, Thackery. He slept a lot.'),
('Binx''images/binx2.jpg', 'Photo of our ferret, Binx. Cage mate with Thackery. Bonus point if you get the movie reference.'),
('Shrimp', 'images/shrimp.jpg', 'Photo of our cat, Shrimp. Shrimp was an asshole. Actual asshole, not normal cat indifference asshole.'),
( 'Rowan', 'images/rowan.jpg', 'Photo of cat, Rowan. She was a sweet old lady.'),
('Sif', 'images/sif.jpg', 'Photo of Sif. She was the best.');
