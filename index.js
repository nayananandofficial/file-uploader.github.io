import express from 'express';
import basicAuth from 'express-basic-auth';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

// Middleware for Basic Authentication
app.use(basicAuth({
    users: { 'admin': 'password' },
    challenge: true,
    unauthorizedResponse: 'Unauthorized'
}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.resolve(), 'public', 'img'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded successfully');
});

app.get('/images', (req, res) => {
    fs.readdir(path.join(path.resolve(), 'public', 'img'), (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }

        // Filter out files that don't have numeric parts
        files = files.filter(file => /\d+/.test(file));

        // Sort files numerically by their name
        files.sort((a, b) => {
            const regex = /\d+/g;
            const numA = parseInt(a.match(regex)[0], 10);
            const numB = parseInt(b.match(regex)[0], 10);
            return numB - numA;
        });

        res.json(files);
    });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
