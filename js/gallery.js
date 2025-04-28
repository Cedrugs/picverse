const tagsData = [
    {
      tag: "Fantasy",
      artworks: [
        { title: "Enchanted Castle", artist: "Elyra Moon", description: "A magical fortress glowing in the night." },
        { title: "Dragon's Lair", artist: "Kael Storm", description: "Hidden deep in a misty cave." },
        { title: "Mystic Woods", artist: "Lira Fern", description: "A mysterious forest full of ancient secrets." },
        { title: "Elf Archer", artist: "Thalen Wind", description: "A guardian watching the forest paths." },
        { title: "Wizard Tower", artist: "Merin Blaze", description: "Home to ancient spells and knowledge." },
        { title: "Fairy Garden", artist: "Selena Moonlight", description: "A magical place where fairies gather." },
        { title: "Phoenix Rebirth", artist: "Rylan Blaze", description: "The legendary bird rising from the ashes." },
        { title: "Ancient Temple", artist: "Dorian Shade", description: "A long-lost temple hidden in the jungle." },
        { title: "Sword of Light", artist: "Aric Starblade", description: "A mystical sword glowing with pure energy." },
        { title: "Celestial Queen", artist: "Aurora Skye", description: "The queen who reigns over the stars." },
        { title: "Unicorn's Grace", artist: "Lyra Dreamweaver", description: "A pure creature galloping through the mist." },
        { title: "Dragon Rider", artist: "Kaelen Stormrider", description: "A fearless hero soaring through the skies." },
        { title: "Crystal Cavern", artist: "Eldrin Frost", description: "A glowing cave filled with priceless crystals." },
        { title: "Forest of Shadows", artist: "Vera Darkwood", description: "A shadowy realm where danger lurks." },
        { title: "Moonlit Lake", artist: "Selene Nightshade", description: "A serene lake illuminated by the moon." }
      ]
    },
    {
      tag: "SciFi",
      artworks: [
        { title: "Space Battle", artist: "Nova Jett", description: "Explosive action in deep space." },
        { title: "Futuristic City", artist: "Zara Void", description: "Skyscrapers and hovercars galore." },
        { title: "Robot Companion", artist: "Dex Core", description: "Your loyal assistant of the future." },
        { title: "Alien Planet", artist: "Quinn Lux", description: "A bizarre world with floating islands." },
        { title: "Cybernetic Soldier", artist: "Ryke Volt", description: "Enhanced for ultimate combat." },
        { title: "Hovercar Chase", artist: "Kira Nova", description: "An intense chase through neon-lit streets." },
        { title: "Android Overlord", artist: "Milo Forge", description: "The ultimate AI ruler." },
        { title: "Galactic Explorer", artist: "Lina Starwind", description: "A lone explorer charting the stars." },
        { title: "Virtual Reality Dream", artist: "Fenix Blue", description: "A simulation world that feels real." },
        { title: "Neon Jungle", artist: "Rox Nova", description: "A dense jungle lit by neon lights." },
        { title: "Robotic Uprising", artist: "Vera X", description: "A revolt of machines against their creators." },
        { title: "Space Colony", artist: "Seth Orion", description: "A thriving human colony on a distant planet." },
        { title: "Nano-Tech", artist: "Ira Cypher", description: "Revolutionary technology that changes everything." },
        { title: "AI Revolution", artist: "Juno Code", description: "The rise of artificial intelligence." },
        { title: "Astral War", artist: "Caden Black", description: "A war between galactic factions." }
      ]
    },
    {
      tag: "Portrait",
      artworks: [
        { title: "Lady with Hat", artist: "Isabelle Noire", description: "A timeless portrait of elegance." },
        { title: "Smiling Child", artist: "Milo Sketch", description: "Capturing joy in purest form." },
        { title: "Old Man", artist: "Ella Paints", description: "A lifetime etched in his face." },
        { title: "Girl in Blue", artist: "Lina Brush", description: "A calming presence in soft hues." },
        { title: "Smoker", artist: "Jax Soot", description: "A moody and gritty atmosphere." },
        { title: "Elegant Dancer", artist: "Ria Poise", description: "Grace in every move." },
        { title: "The Thinker", artist: "Soren Ember", description: "A deep contemplation captured in a portrait." },
        { title: "Sculpted Beauty", artist: "Marla Stone", description: "A portrait of beauty carved in time." },
        { title: "Gentle Gaze", artist: "Amara Dawn", description: "Soft eyes that speak of kindness." },
        { title: "Boy with Dog", artist: "Trey Ember", description: "A boy and his loyal companion, captured forever." },
        { title: "Lady in Red", artist: "Chloe Illume", description: "A powerful portrait of strength and beauty." },
        { title: "The Artist", artist: "Juno Masterson", description: "A self-portrait of a visionary artist." },
        { title: "The Dreamer", artist: "Gage Harper", description: "A portrait of someone lost in thought." },
        { title: "Mysterious Eyes", artist: "Dara Faye", description: "Eyes that hide untold secrets." },
        { title: "Elder Wisdom", artist: "Theo Sage", description: "A portrait reflecting years of knowledge and experience." }
      ]
    },
    {
      tag: "Abstract",
      artworks: [
        { title: "Color Explosion", artist: "Vera Shine", description: "A burst of color blending into chaos." },
        { title: "Deep Ocean", artist: "Elara Star", description: "Waves of blue that transcend the ocean." },
        { title: "Fractured Reality", artist: "Xander Edge", description: "A fractured view of the world, disjointed and surreal." },
        { title: "Geometric Flow", artist: "Blaze Forte", description: "Sharp lines flowing into impossible shapes." },
        { title: "Electric Pulse", artist: "Luka Wave", description: "The pulse of electricity captured in light." },
        { title: "Ethereal Mist", artist: "Sage Wind", description: "An intangible mist that defies form." },
        { title: "Mirror of Souls", artist: "Rina Mirror", description: "A reflection of the human soul in vibrant colors." },
        { title: "Timeless Motion", artist: "Iris Flux", description: "Time flowing in a circle of endless motion." },
        { title: "Abstract Chaos", artist: "Milo Crash", description: "A chaotic dance of shapes and colors." },
        { title: "Fractal Mind", artist: "Liora Maze", description: "Patterns within patterns within thoughts." },
        { title: "Fluidity", artist: "Kai Ether", description: "The feeling of liquid motion captured in form." },
        { title: "Vibration", artist: "Juno Echo", description: "Vibrations in space, sound waves visualized." },
        { title: "Spectrum of Light", artist: "Oren Lux", description: "Light split into its purest form." },
        { title: "Cosmic Dust", artist: "Astra Veil", description: "Tiny particles in space, swirling endlessly." },
        { title: "Silent Universe", artist: "Nova Ember", description: "A quiet, infinite void in a world of stillness." }
      ]
    },
    {
        tag: "Nature",
        artworks: [
          { title: "Mountain Peaks", artist: "Kira Dawn", description: "Snow-capped mountains rising above the clouds." },
          { title: "Sunset Over the Ocean", artist: "Luna Sky", description: "The sun dipping below the horizon, painting the sky with colors." },
          { title: "Forest Trail", artist: "Finn Willow", description: "A peaceful path winding through the ancient forest." },
          { title: "Wildflowers in Bloom", artist: "Cleo Petal", description: "A meadow bursting with vibrant wildflowers." },
          { title: "River's Journey", artist: "Toby Creek", description: "A gentle river flowing through the landscape, kissed by the sun." },
          { title: "Autumn Leaves", artist: "Maya Storm", description: "Golden leaves falling in a quiet autumn breeze." },
          { title: "Desert Mirage", artist: "Rex Ember", description: "A shimmering illusion in the vast, arid desert." },
          { title: "Tropical Paradise", artist: "Kai Coral", description: "A pristine beach surrounded by lush palm trees and crystal-clear waters." },
          { title: "Snowfall in the Forest", artist: "Ava Frost", description: "Snow gently falling in a peaceful woodland." },
          { title: "Night Sky", artist: "Orion Vale", description: "Stars twinkling in the vast, infinite night." },
          { title: "The Big Redwood", artist: "Max Timber", description: "A towering redwood tree reaching to the heavens." },
          { title: "Blossom Garden", artist: "Lily Fern", description: "A garden filled with delicate cherry blossoms in full bloom." },
          { title: "Northern Lights", artist: "Zara Borealis", description: "A mesmerizing dance of colors across the arctic sky." },
          { title: "The Calm Lake", artist: "Elise Waters", description: "A still, tranquil lake reflecting the beauty of the mountains around it." },
          { title: "Canyon View", artist: "Theo Stone", description: "A breathtaking view of the canyon, bathed in golden sunlight." }
        ]
      }
  ];
  
  
  const tagsContainer = document.getElementById('tagsContainer');
  const modal = document.getElementById('artwork-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalArtist = document.getElementById('modal-artist');
  
  tagsData.forEach(group => {
    const tagGroup = document.createElement('div');
    tagGroup.className = 'tag-group';
    tagGroup.setAttribute('data-tag', group.tag);
  
    const heading = document.createElement('h3');
    heading.textContent = `#${group.tag}`;
  
    const artworksRow = document.createElement('div');
    artworksRow.className = 'artworks-row';
  
    group.artworks.forEach(art => {
      const img = document.createElement('img');
      img.className = 'thumbnail';
      img.alt = art.title;
      img.dataset.full = `https://picsum.photos/seed/${Math.random().toString(36).substring(2, 7)}/600/400`;
      img.dataset.title = art.title;
      img.dataset.desc = art.description;
      img.dataset.artist = art.artist;
      img.src = img.dataset.full;
  
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        modalImage.src = img.dataset.full;
        modalImage.alt = img.dataset.title;
        modalTitle.textContent = img.dataset.title;
        modalDesc.textContent = img.dataset.desc;
        modalArtist.textContent = img.dataset.artist;
      });
  
      artworksRow.appendChild(img);
    });
  
    tagGroup.appendChild(heading);
    tagGroup.appendChild(artworksRow);
    tagsContainer.appendChild(tagGroup);
  });
  
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });
  }
  
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });
  