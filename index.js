import express from 'express';
import path from 'path';
import multer from 'multer';
import basicAuth from 'express-basic-auth';
import fs from 'fs';

const app = express();
const __dirname = path.resolve();

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic Auth Middleware
app.use(basicAuth({
    users: { 'admin': 'password' },
    challenge: true,
}));

// Define storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'img'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
    res.redirect('/');
});

// Fetch images route
app.get('/images', (req, res) => {
    fs.readdir(path.join(__dirname, 'public', 'img'), (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const images = files.filter(file => file.match(/\d+/)).sort((a, b) => {
            return parseInt(b.match(/\d+/)[0], 10) - parseInt(a.match(/\d+/)[0], 10);
        });
        res.json(images);
    });
});

// Render index.ejs
app.get('/', (req, res) => {
    fs.readdir(path.join(__dirname, 'public', 'img'), (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const images = files.filter(file => file.match(/\d+/)).sort((a, b) => {
            return parseInt(b.match(/\d+/)[0], 10) - parseInt(a.match(/\d+/)[0], 10);
        });
        res.render('index', { images: images });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
