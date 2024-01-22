
const database = {
  fish: [
    {
      name: "Gustav",
      species: "Goldfish",
      length: 15,
      location: "Freshwater",
      food: "Fish flakes",
      image: `https://static01.nyt.com/images/2024/01/02/multimedia/00xp-goldfish/00xp-goldfish-superJumbo.jpg`,
    },
    {
      name: "Bubbles",
      species: "Guppy",
      length: 3,
      location: "Freshwater",
      food: "Pellets and live/frozen foods",
      image: `https://www.aquariumfreaks.com/wp-content/uploads/2019/12/Guppy_Fish.jpg`
    },
    {
      name: "Zesty",
      species: "Zebrafish",
      length: 2,
      location: "Freshwater",
      food: "Small live or frozen foods",
      image: `https://i.pinimg.com/originals/bf/57/b8/bf57b8fd364174bf6277ca9d244ab916.jpg`
    },
    {
      name: "Neo",
      species: "Neon Tetra",
      length: 5,
      location: "Freshwater",
      food: "Tropical fish flakes",
      image: `https://aquaticarts.com/cdn/shop/products/Neon-Tetra-Small-2.jpg?v=1616870179`
    },
    {
      name: "Angie",
      species: "Angelfish",
      length: 6,
      location: "Freshwater",
      food: "Live or frozen brine shrimp",
      image: `https://media-be.chewy.com/wp-content/uploads/2019/07/18135520/Pterophyllum-scalare-angelfish.jpg`
    },
    {
      name: "Coral",
      species: "Clownfish",
      length: 6,
      location: "Saltwater",
      food: "Commercial marine fish food",
      image: `https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/
              18/1411000874774/7ed61686-28c9-44bf-9565-31964b00b470-2060x1236.jpeg?width=
              700&quality=85&auto=format&fit=max&s=5d081b874d3f5cb17cae357a84a45073`
    },
    {
      name: "Polly",
      species: "Molly",
      length: 3.5,
      location: "Freshwater",
      food: "Vegetable-based flakes",
      image: `https://aquariumguy.net/wp-content/uploads/2023/04/molly-fish-care-guide-728x410.jpg.webp`
    },
    {
      name: "Sharpie",
      species: "Blue Tang",
      length: 6,
      location: "Saltwater",
      food: "Algae and marine flakes",
      image: `https://hakaimagazine.com/wp-content/uploads/header-breeding-tropical-fish.jpg`
    },
    {
      name: "Disco",
      species: "Discus Fish",
      length: 5,
      location: "Freshwater",
      food: "High-quality discus pellets",
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0Zz8oi_0jt4aeuyozevOrc7hWvtGKVkYMGvkEHUdA-hYX1GVIxwN5TJ9_iQ4U3shSbo&usqp=CAU`
    },
    {
      name: "Reba McEntire",
      species: "Betta Fish",
      length: 2.5,
      location: "Freshwater",
      food: "Betta pellets and live/frozen foods",
      image: `https://www.hepper.com/wp-content/uploads/2022/09/Siamese-fighting-fish-Rosetail-halfmoon_panlipai-paipa_shutterstock.jpg`
    },
  ],

  tips: [
    {
      title: "Water Quality",
      description: "Regularly test and maintain water quality. Keep ammonia, nitrite, and nitrate levels in check.",
    },
    {
      title: "Temperature Control",
      description: "Maintain a consistent water temperature suitable for your aquarium inhabitants. Use a heater if needed.",
    },
    {
      title: "Filtration System",
      description: "Install and maintain a reliable filtration system to remove debris and maintain water clarity.",
    },
    {
      title: "Feeding Schedule",
      description: "Establish a regular feeding schedule. Avoid overfeeding, as it can lead to water quality issues.",
    },
    {
      title: "Aquarium Lighting",
      description: "Provide appropriate lighting for your aquarium inhabitants. Consider the lighting needs of plants and fish.",
    },
    {
      title: "Regular Cleaning",
      description: "Perform routine tank cleaning. Remove uneaten food, debris, and perform partial water changes.",
    }
  ],
  locations:  [
    {
        location: "Amazon River",
        description: "Explore the diverse ecosystems of the Amazon River for unique and colorful aquarium fish.",
        accessibility: "Requires permits and compliance with local regulations.",
    },
    {
        location: "Great Barrier Reef",
        description: "Visit the Great Barrier Reef to find a variety of stunning marine species for your aquarium.",
        accessibility: "Strict regulations apply to protect the delicate coral ecosystems.",
    },
    {
        location: "Lake Tanganyika",
        description: "Discover cichlids and other exotic fish in the crystal-clear waters of Lake Tanganyika in Africa.",
        accessibility: "Check local laws and conservation efforts before collecting fish.",
    },
    {
        location: "Coral Triangle",
        description: "Explore the Coral Triangle for a high diversity of marine life, including rare and colorful fish species.",
        accessibility: "Respect conservation efforts and only engage in sustainable practices.",
    },
    {
        location: "Indo-Pacific Reefs",
        description: "Harvest fish from the vibrant coral reefs of the Indo-Pacific region for a unique aquarium experience.",
        accessibility: "Adhere to international and local regulations for responsible harvesting.",
    },
]


}


export const getFish = () => {
  return database.fish.map(fish => ({ ...fish }))
}

export const getTips = () => {
  return database.tips.map(tips => ({ ...tips }))
}

export const getLocation = () => {
  return database.locations.map(locations => ({ ...locations }))
}

