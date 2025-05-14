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
