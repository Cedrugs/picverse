const tagsData = [
    {
        tag: "Fantasy",
        artworks: [
        {
            title: "Moonlit Vale",
            artist: "Aria Stone",
            description: "A serene valley bathed in moonlight.",
            likes: "312k",
            url: "fantasy_1.jpg"
        },
        {
            title: "Crimson Blade",
            artist: "Jax Vorn",
            description: "A legendary sword with untold power.",
            likes: "89.5k",
            url: "fantasy_2.jpg"
        },
        {
            title: "Celestial Grove",
            artist: "Faye Moon",
            description: "Trees radiant with magic under stars.",
            likes: "158k",
            url: "fantasy_3.jpg"
        },
        {
            title: "Sorcerer's Peak",
            artist: "Dax Eldrin",
            description: "The highest point ruled by ancient wizards.",
            likes: "422k",
            url: "fantasy_4.jpg"
        },
        {
            title: "Pixie Hollow",
            artist: "Luna Breeze",
            description: "A mystical home of playful pixies.",
            likes: "97.7k",
            url: "fantasy_5.jpg"
        },
        {
            title: "Drake’s Flight",
            artist: "Tess Gray",
            description: "A dragon soaring above the mountains.",
            likes: "274k",
            url: "fantasy_6.jpg"
        }
        ]
    },
    {
        tag: "SciFi",
        artworks: [
        {
            title: "Neon Grid",
            artist: "Nova Cryx",
            description: "Futuristic city glowing with neon lights.",
            likes: "1.1m",
            url: "sciFi_1.jpg"
        },
        {
            title: "StarRunner",
            artist: "Kai Zen",
            description: "A sleek spaceship streaking through galaxies.",
            likes: "420k",
            url: "sciFi_2.jpg"
        },
        {
            title: "Quantum Rift",
            artist: "Lex Ray",
            description: "A portal bridging dimensions unknown.",
            likes: "305k",
            url: "sciFi_3.jpg"
        },
        {
            title: "Synth Wave",
            artist: "Zara Vox",
            description: "Cybernetic beats in a digital night.",
            likes: "587k",
            url: "sciFi_4.jpg"
        },
        {
            title: "Alien Dawn",
            artist: "Ryn Flux",
            description: "An unknown world awakening to sunrise.",
            likes: "219k",
            url: "sciFi_5.jpg"
        },
        {
            title: "Mech Vanguard",
            artist: "Dex Volt",
            description: "Robotic soldier guarding the frontier.",
            likes: "635k",
            url: "sciFi_6.jpg"
        }
        ]
    },
    {
        tag: "Portrait",
        artworks: [
        {
            title: "Silent Gaze",
            artist: "Ivy Cain",
            description: "An intense look captured on canvas.",
            likes: "210k",
            url: "portrait_1.jpg"
        },
        {
            title: "Golden Smile",
            artist: "Max Reed",
            description: "Joy expressed in warm golden tones.",
            likes: "472k",
            url: "portrait_2.jpg"
        },
        {
            title: "Shaded Sight",
            artist: "Zoe Fenn",
            description: "A contemplative person in shadow.",
            likes: "139k",
            url: "portrait_3.jpg"
        },
        {
            title: "Blue Aura",
            artist: "Lia Walsh",
            description: "A calm presence surrounded by blue hues.",
            likes: "267k",
            url: "portrait_4.jpg"
        },
        {
            title: "Rust & Smoke",
            artist: "Jax Soot",
            description: "Moody portrait with gritty atmosphere.",
            likes: "94.3k",
            url: "portrait_5.jpg"
        },
        {
            title: "Childhood Joy",
            artist: "Mira Skye",
            description: "Pure happiness frozen in time.",
            likes: "389k",
            url: "portrait_6.jpg"
        }
        ]
    },
    {
        tag: "Nature",
        artworks: [
            {
                title: "Dawn Ridge",
                artist: "Kira Elm",
                description: "Sunrise brushing the mountain tops.",
                likes: "680k",
                url: "nature_1.jpg"
            },
            {
                title: "Ocean Whisper",
                artist: "Luna Sky",
                description: "Gentle waves caress the shore in silence.",
                likes: "973k",
                url: "nature_2.jpg"
            },
            {
                title: "Forest Glow",
                artist: "Finn Moss",
                description: "Light filtering through dense trees.",
                likes: "412k",
                url: "nature_3.jpg"
            },
            {
                title: "Bloom Tide",
                artist: "Cleo Petal",
                description: "Wildflowers painting the hills with color.",
                likes: "345k",
                url: "nature_4.jpg"
            },
            {
                title: "River’s Path",
                artist: "Toby Creek",
                description: "Water winding through lush landscapes.",
                likes: "527k",
                url: "nature_5.jpg"
            },
            {
                title: "Amber Fall",
                artist: "Maya Storm",
                description: "Golden leaves drift through autumn air.",
                likes: "285k",
                url: "nature_6.jpg"
            }
        ]
    }
];

const tagsContainer = document.getElementById('Gallery');
const modal = document.getElementById('Artwork-Modal');
const modalCloseBtn = document.getElementById('Modal-Close');
const modalImage = document.getElementById('Modal-Image');
const modalTitle = document.getElementById('Modal-Title');
const modalDesc = document.getElementById('Modal-Desc');
const modalArtist = document.getElementById('Modal-Artist');

tagsData.forEach(group => {
	const artworkSection = document.createElement('section');
	artworkSection.className = "artworks-section-container";
	
	// Title
	const artworkTagName = document.createElement("h1");
	artworkTagName.className = "section-title";
	artworkTagName.textContent = `#${group.tag}`;

	// Append title to section
	artworkSection.appendChild(artworkTagName);

	// Container of all the images on the section
	const featuredArtworkContainer = document.createElement("div");
	featuredArtworkContainer.className = "featured-artworks-container";

	// Each image will be added
	group.artworks.forEach(art => {
		// Container of each image
		const artworkContainer = document.createElement("div");
		artworkContainer.className = "artwork-container";
		
		// The image
		const img = document.createElement("img");
		img.className = "artwork-image";
		img.alt = art.title;
		
		const imageUrl = `/assets/artworks/${art.url}`;

		// Images information
		img.dataset.full = imageUrl;
		img.dataset.title = art.title;
		img.dataset.desc = art.description;
		img.dataset.artist = art.artist;
		img.src = imageUrl;

		// Listener for modal popup
		img.addEventListener('click', () => {
			modal.style.display = 'flex';
			modal.setAttribute('aria-hidden', 'false');
			modalImage.src = img.dataset.full;
			modalImage.alt = img.dataset.title;
			modalTitle.textContent = img.dataset.title;
			modalDesc.textContent = img.dataset.desc;
			modalArtist.textContent = `by ${img.dataset.artist}`;
			document.body.style.overflow = 'hidden';
		});

		// Artwork details container
		const artworkDetails = document.createElement("div");
		artworkDetails.className = "artwork-details";
		artworkDetails.innerHTML = `${art.title}<br>${art.artist}`;

		// Artwork likes container
		const artworkLikes = document.createElement("div");
		artworkLikes.className = "artwork-likes";

		// Artwork likes count
		const artworkLikesP = document.createElement("p");
		artworkLikesP.textContent = art.likes;

		// Artwork likes icon
		const artworkLikesImg = document.createElement("img");
		artworkLikesImg.src = "/assets/icons/like.png"

		artworkLikes.appendChild(artworkLikesP);
		artworkLikes.appendChild(artworkLikesImg);

		artworkContainer.appendChild(artworkLikes);
		artworkContainer.appendChild(artworkDetails);
		artworkContainer.appendChild(img);
		featuredArtworkContainer.appendChild(artworkContainer);
	});

	// Append the featuredArtworkContainer to the section
	artworkSection.appendChild(featuredArtworkContainer);

	// Append to the Main container (Gallery)
	tagsContainer.appendChild(artworkSection);
});

if (modalCloseBtn) {
  	modalCloseBtn.addEventListener('click', () => {
		modal.style.display = 'none';
		modal.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
  	});
}

window.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.style.display = 'none';
		modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
	}
});