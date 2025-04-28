
const windowLocation = window.location.pathname;
console.log(windowLocation);

if (windowLocation == "index.html") {
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
    { image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'Jane Doe' },
    { image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'John Smith' },
    { image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'James Smith' },
    { image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'Jane Bone' },
    { image: `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 2 + 5)}/1920/1080`, artist: 'John Brook' },
  ];

  let currentSlide = 0;

  function updateHeroSlide() {
    const slide = heroSlides[currentSlide];
    hero.style.backgroundImage = `url('${slide.image}')`;
    artistNameElem.textContent = slide.artist;
    currentSlide = (currentSlide + 1) % heroSlides.length;
  }

  setInterval(updateHeroSlide, 2000);
  updateHeroSlide();
}

if (windowLocation == "/gallery.html") {

  /* GALLERY PAGE: modal popup for artwork details */
  const modal = document.getElementById('artwork-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalArtist = document.getElementById('modal-artist');
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }
  
  /* Open modal on thumbnail click */
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      if (!modal) return;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      modalImage.src = thumb.dataset.full;
      modalImage.alt = thumb.alt;
  
      // This demo doesn't have dynamic titles, artist, or description so:
      modalTitle.textContent = thumb.alt;
      modalDesc.textContent = "Detailed view of the artwork.";
      modalArtist.textContent = "Unknown Artist"; // You can customize each image with data attrs
    });
  });
}

/* SUBMISSION PAGE: custom JS form validation (no regex) */

const form = document.getElementById('artwork-form');

if(form){
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements['email'].value.trim();
    const title = form.elements['title'].value.trim();
    const description = form.elements['description'].value.trim();
    const tags = form.elements['tags'].value.trim();
    const fileInput = form.elements['file-upload'];
    const aiRadios = form.elements['ai-generated'];

    const messageEl = document.getElementById('form-message');
    messageEl.textContent = '';

    // Validation checks (no regex)

    // 1. Email: must contain '@' and '.' with '@' before last '.'
    function validateEmail(email){
      const at = email.indexOf('@');
      const dot = email.lastIndexOf('.');
      return at > 0 && dot > at + 1 && dot < email.length -1;
    }

    // 2. Title: min length 3
    // 3. Description: required (non empty)
    // 4. Tags: required (non empty)
    // 5. File: must be image type and file selected
    // 6. AI radio: one selected

    if(!validateEmail(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      return;
    }
    if(title.length < 3){
      messageEl.textContent = 'Title must be at least 3 characters.';
      return;
    }
    if(description.length === 0){
      messageEl.textContent = 'Description is required.';
      return;
    }
    if(tags.length === 0){
      messageEl.textContent = 'Please add at least one tag.';
      return;
    }
    if(fileInput.files.length === 0){
      messageEl.textContent = 'Please upload an image file.';
      return;
    }
    // Check file type by simple string check on file type (starts with "image/")
    if(!fileInput.files[0].type.startsWith('image/')){
      messageEl.textContent = 'Uploaded file must be an image.';
      return;
    }
    // Check one radio selected
    let aiSelected = false;
    for(let i=0; i<aiRadios.length; i++){
      if(aiRadios[i].checked){
        aiSelected = true;
        break;
      }
    }
    if(!aiSelected){
      messageEl.textContent = 'Please confirm AI-generated status.';
      return;
    }

    // If all passed
    messageEl.style.color = 'green';
    messageEl.textContent = 'Artwork submitted successfully! Thank you.';
    form.reset();
  });
}