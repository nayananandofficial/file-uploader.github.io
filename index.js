//Import the required modules:
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import basicAuth from 'basic-auth';

//Create an Express application instance and set the port number to 3000:
const app = express();
const port = 3000;

//Define middleware for basic authentication:
const auth = (req, res, next) => {
    const user = basicAuth(req);
    if (!user || user.name !== 'admin' || user.pass !== 'password') {
        res.set('WWW-Authenticate', 'Basic realm="401"');
        res.status(401).send('Authentication required.');
        return;
    }
    next();
};

//Configure Multer to store uploaded files:
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

//Create a Multer instance with the specified storage configuration.
const upload = multer({ storage });

//Serve static files from the public directory:
app.use(express.static('public'));


//Define a POST route for file uploads:
app.post('/upload', auth, upload.single('image'), (req, res) => {
    res.redirect('/');
});

//Define a GET route to fetch the list of images:
app.get('/images', (req, res) => {
    fs.readdir('public/img', (err, files) => {
        if (err) {
            res.status(500).send('Server error.');
            return;
        }
        res.json(files);
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


