const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const multer = require('multer');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE
const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

router.post('/', (req, res) => {
	const newImage = req.body;
	console.log(newImage);
	const path = `images/${newImage.file}`;
	const queryText = 'INSERT INTO "gallery" (title, path, description) VALUES ($1, $2, $3);';
	pool
		.query(queryText, [newImage.title, path, newImage.description])
		.then((result) => {
		})
		.catch((error) => {
			console.log('Error with post request', error);
		});
});

// this is the route for the image
router.post('/image', upload.single('image'), (req, res) => {
	res.send('File uploaded successfully');
});

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = 'UPDATE "gallery" SET "likes" = likes+1 WHERE id = $1;';
	pool
		.query(queryText, [galleryId])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with put request', error);
			res.sendStatus(500);
		});
});
 // END PUT Route

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); 
// END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "gallery" ORDER BY "id";';
	pool
		.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with get request', error);
			res.sendStatus(500);
		});
}); 
// END GET Route

router.delete('/:id', (req, res) => {
	const galleryId = req.params.id;
	const queryText = 'DELETE FROM "gallery" WHERE id = $1;';
	pool
		.query(queryText, [galleryId])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with delete request', error);
			res.sendStatus(500);
		});
});

module.exports = router;