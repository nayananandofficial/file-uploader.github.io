import express from 'express';
import multer from 'multer';
import path from 'path';
import basicAuth from 'express-basic-auth';
import fs from 'fs';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(basicAuth({
    user: {'admin':'password'},
    challenge: true
}));

app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.resolve(), 'public', 'img'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
    res.redirect('/');
});

app.get('/images', async (req, res) => {

    try{
        const imgPath = path.join(path.resolve(), 'public', 'img');
        const files = await fs.readdir(imgPath);
        const images = files.filter(image => {
            const regex = /^\d+\.(jpg|jpeg|png|gif)$/i;
            return regex.test(image);
        }).sort((a, b) => {
            const regex = /\d+/g;
            const numA = parseInt(a.match(regex)[0], 10);
            const numB = parseInt(b.match(regex)[0], 10);
            return numB - numA;
        });
        res.json(images);
    } catch(error) {
            res.status(500).json({error: 'failed to read image directiry'});
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
