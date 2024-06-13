        // Array of image URLs and alt texts
        const images = [
            { src: 'img/Charlotte Linlin 4_388.000.000', alt: 'Big Mom' },
            { src: 'img/shanks.jpeg', alt: 'Shanks' },
            { src: 'img/Marshall D_ Teach.jpeg', alt: 'Blackbeard' },
            { src: 'img/Dracule Mihawk.jpeg', alt: 'Mihawk' },
            { src: 'img/Buggy.jpeg', alt: 'Buggy' },
            { src: 'img/luffy.jpeg', alt: 'Monkey D Luffy' },
            { src: 'img/Crocodile.jpeg', alt: 'Crocodile' },
            { src: 'img/zoro.jpeg', alt: 'Zoro' },
            { src: 'img/jinbei.jpeg', alt: 'Jinbei' },
            { src: 'img/Charlotte Katakuri 1_057.000.000', alt: 'Katakuri' },
            { src: 'img/Sanji.jpeg', alt: 'Sanji' },
            { src: 'img/Charlotte Smoothie 932_000.000', alt: 'Smoothie' },
            { src: 'img/nico robin.jpeg', alt: 'Nico Robin' },
            { src: 'img/Cracker 860_000.000', alt: 'Cracker' },
            { src: 'img/Charlotte Perospero 700_000.000', alt: 'Perospero' },
            { src: 'img/Charlotte Snack 600_000.000', alt: 'Snack' },
            { src: 'img/Don Chinjao.jpeg', alt: 'Don Chinjao' },
            { src: 'img/usopp.jpeg', alt: 'Usopp' },
            { src: 'img/Barón Tamago 429_000.000', alt: 'Tamago' },
            { src: 'img/Franky.jpeg', alt: 'Franky' },
            { src: 'img/brook.jpeg', alt: 'Brook' },
            { src: 'img/nami.jpeg', alt: 'Nami' },
            { src: 'img/cavendish.jpeg', alt: 'cavendish' },
            { src: 'img/Pekoms 330_000.000', alt: 'Pekoms' },
            { src: 'img/Charlotte Daifuku.jpeg', alt: 'Daifuku' },
            { src: 'img/Charlotte Oven.jpeg', alt: 'Oven' },
            { src: 'img/sai.jpeg', alt: 'Sai' },
            { src: 'img/Bartolomeo.jpeg', alt: 'Bartolomeo' },
            { src: 'img/Orlumbus.jpeg', alt: 'Orlumbus' },
            { src: 'img/Charlotte Mont-d\'Or.jpeg', alt: 'Mont d\'or' },
            { src: 'img/Bobbin 105_500.000', alt: 'Bobbin' },
            { src: 'img/Brogy.jpeg', alt: 'Brogy' },
            { src: 'img/Dorry.jpeg', alt: 'Dorry' },
            { src: 'img/Kinoko.jpeg', alt: 'Kinoko' },
            { src: 'img/rockstar.jpeg', alt: 'Rockstar' },
            { src: 'img/Daz Bones 75_000.000', alt: 'Daz Bones' },
            { src: 'img/Doc Q.jpeg', alt: 'Doc Q' },
            { src: 'img/Suleiman.jpeg', alt: 'Suleiman' },
            { src: 'img/gambia.jpeg', alt: 'Gambia' },
            { src: 'img/Van Augur.jpeg', alt: 'Van Augur' },
            { src: 'img/Laffite.jpeg', alt: 'Laffite' },
            { src: 'img/Galdino 24_000.000', alt: 'Galdino' },
            { src: 'img/Jesus Burgess.jpeg', alt: 'Jesus Burgess' },
            { src: 'img/Alvida 5_000.000', alt: 'Alvida' },
            { src: 'img/Tony Tony Chopper.jpeg', alt: 'Chopper' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
            { src: 'img/', alt: '' },
        ];

        // Select the wrapper element
        const wrapper = document.getElementById('image-wrapper');

        // Loop through the images array and create HTML elements
        images.forEach(image => {
            const div = document.createElement('div');
            div.classList.add('item');
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            
            div.appendChild(img);
            wrapper.appendChild(div);
        });