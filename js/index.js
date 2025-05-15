const bg = document.getElementById("BackgroundFade");
const artistName = document.getElementById("heroArtist");

const heroSlides = [
    { image: "./assets/slideshow/slideshow_1.png", artist: "John William"},
    { image: "./assets/slideshow/slideshow_2.jpg", artist: "Kevin Gogh" },
    { image: "./assets/slideshow/slideshow_3.jpg", artist: "Leonardo Da Vinci" },
    { image: "./assets/slideshow/slideshow_4.jpg", artist: "Veince Cou" },
];

let currentSlide = 0;
let isFirstRun = true;

function updateHeroSlide() {
    const nextSlide = heroSlides[currentSlide];

    if (isFirstRun) {
        bg.style.backgroundImage = `
        linear-gradient(to bottom, rgba(30, 33, 36, 0) 60%, rgba(30, 33, 36, 1) 95%),
        linear-gradient(to top, rgba(30, 33, 36, 0) 75%, rgba(30, 33, 36, 0.8) 95%),
        url('${nextSlide.image}')
        `;
        bg.style.opacity = 1;
        isFirstRun = false;
    } else {
        bg.style.opacity = 0;

        setTimeout(() => {
            bg.style.backgroundImage = `
            linear-gradient(to bottom, rgba(30, 33, 36, 0) 60%, rgba(30, 33, 36, 1) 95%),
            linear-gradient(to top, rgba(30, 33, 36, 0) 75%, rgba(30, 33, 36, 0.8) 95%),
            url('${nextSlide.image}')
            `;
            bg.style.opacity = 1;
        }, 1200);
    }

    artistName.textContent = nextSlide.artist;
    currentSlide = (currentSlide + 1) % heroSlides.length;
}

setInterval(updateHeroSlide, 3000);
updateHeroSlide();

// Featured Artworks

const artworkData = [
    {
        title: "I love hacking",
        artist: "WilliamJames",
        likes: "54.1k",
        url: "i_love_hacking.png"
    },
    {
        title: "Electrify!",
        artist: "KevinGordon",
        likes: "1.5k",
        url: "electrify.jpg"
    },
    {
        title: "Astronauts",
        artist: "Michellekim",
        likes: "39.1k",
        url: "astronauts.png"
    },
    {
        title: "Hitchhiking",
        artist: "ArthurWild",
        likes: "120.9k",
        url: "hitchiking.png"
    },
    {
        title: "Natural Kiss",
        artist: "sam.arts",
        likes: "920.5k",
        url: "nature_kiss.png"
    },
    {
        title: "MechA!",
        artist: "Gorlock23",
        likes: "1.1m",
        url: "mecha.png"
    },
    
]

const featuredArtworkContainer = document.getElementById("Featured-Artworks-Container");

artworkData.forEach(artwork => {
    const artworkContainer = document.createElement("div");
    artworkContainer.className = "artwork-container";
    
    // The image
    const img = document.createElement("img");
    img.className = "artwork-image";
    img.alt = artwork.title;
    
    const imageUrl = `/assets/featured_artworks/${artwork.url}`;
    img.src = imageUrl;

    // Artwork details container
    const artworkDetails = document.createElement("div");
    artworkDetails.className = "artwork-details";
    artworkDetails.innerHTML = `${artwork.title}<br>${artwork.artist}`;

    // Artwork likes container
    const artworkLikes = document.createElement("div");
    artworkLikes.className = "artwork-likes";

    // Artwork likes count
    const artworkLikesP = document.createElement("p");
    artworkLikesP.textContent = artwork.likes;

    // Artwork likes icon
    const artworkLikesImg = document.createElement("img");
    artworkLikesImg.src = "/assets/icons/like.png"

    artworkLikes.appendChild(artworkLikesP);
    artworkLikes.appendChild(artworkLikesImg);

    artworkContainer.appendChild(artworkLikes);
    artworkContainer.appendChild(artworkDetails);
    artworkContainer.appendChild(img);
    featuredArtworkContainer.appendChild(artworkContainer);
})
