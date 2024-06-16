import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'img'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('image'), (req, res) => {
    res.redirect('/');
});

app.get('/images', (req, res) => {
    const dirPath = path.join(__dirname, 'public', 'img');
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read directory' });
        }
        const sortedFiles = files.sort((a, b) => {
            const regex = /\d+/g;
            const matchA = a.match(regex);
            const matchB = b.match(regex);
            
            if (matchA && matchB) {
                const numA = parseInt(matchA[0], 10);
                const numB = parseInt(matchB[0], 10);
                return numB - numA; // Sort in descending order
            }
            
            // If one or both filenames don't contain numbers, sort alphabetically
            return a.localeCompare(b);
        });
        res.json(sortedFiles);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
