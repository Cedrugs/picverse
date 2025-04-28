// Artwork
const artworks = [
    {
        title: "Mystic Forest",
        artist: "Jane Doe",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Cyber City",
        artist: "John Smith",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Dreamscape",
        artist: "Amy Lee",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Ocean Depths",
        artist: "Carlos Diaz",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Galaxy Quest",
        artist: "Maria Chen",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Neon Mirage",
        artist: "Luna Rivers",
        likes: Math.floor(Math.random() * 100) + 100, // 100–199 likes
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Echoes of Time",
        artist: "Kai Nakamura",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Velvet Horizon",
        artist: "Zara Bloom",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Quantum Dreams",
        artist: "Leo Varga",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
    {
        title: "Sunset Reverie",
        artist: "Isla Fontaine",
        likes: Math.floor(Math.random() * 100) + 100,
        imageUrl: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/600/400`,
    },
];
  
const container = document.getElementById("artworksContainer");
  
artworks.forEach(art => {
    const card = document.createElement("article");
    card.className = "artwork-card";

    const img = document.createElement("img");
    img.src = art.imageUrl;
    img.alt = `${art.title} artwork thumbnail`;

    const title = document.createElement("h3");
    title.textContent = art.title;

    const artist = document.createElement("p");
    artist.textContent = `by ${art.artist}`;

    const likes = document.createElement("p");
    likes.textContent = `❤️ ${art.likes} likes`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(likes);

    container.appendChild(card);
});

// Slideshow
const hero = document.getElementById('hero');
const artistNameElem = document.getElementById('artist-name');
const toGalleryBtn = document.getElementById('to-gallery-btn');

const heroSlides = [
    {image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'Jane Doe'},
    {image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'John Smith'},
    {image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'James Smith'},
    {image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'Jane Bone'},
    {image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'John Brook'},
];

let currentSlide = 0;

function updateHeroSlide() {
    const slide = heroSlides[currentSlide];
    hero.style.backgroundImage = `url('${slide.image}')`;
    artistNameElem.textContent = slide.artist;
    currentSlide = (currentSlide + 1) % heroSlides.length;
}

setInterval(updateHeroSlide, 3000);
updateHeroSlide();