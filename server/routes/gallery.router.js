const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const multer = require('multer');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE
//? required for file upload. Sets destination and name of the file
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
			// res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with post request', error);
			// res.sendStatus(500);
		});
});

//? This route only handles the upload of the image
router.post('/images', upload.single('image'), (req, res) => {
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
			console.log('Error with get request', error);
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
    res.send(galleryItems);
}); // END GET Route

module.exports = router;