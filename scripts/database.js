
const database = {
   fish:  [
    {
      name: "Goldie",
      species: "Goldfish",
      length: "5 inches",
      location: "Freshwater",
      food: "Fish flakes",
    },
    {
      name: "Bubbles",
      species: "Guppy",
      length: "2 inches",
      location: "Freshwater",
      food: "Pellets and live/frozen foods",
    },
    {
      name: "Zest",
      species: "Zebrafish",
      length: "3 inches",
      location: "Freshwater",
      food: "Small live or frozen foods",
    },
    {
      name: "Neo",
      species: "Neon Tetra",
      length: "1.5 inches",
      location: "Freshwater",
      food: "Tropical fish flakes",
    },
    {
      name: "Angie",
      species: "Angelfish",
      length: "6 inches",
      location: "Freshwater",
      food: "Live or frozen brine shrimp",
    },
    {
      name: "Coral",
      species: "Clownfish",
      length: "4 inches",
      location: "Saltwater",
      food: "Commercial marine fish food",
    },
    {
      name: "Polly",
      species: "Molly",
      length: "3.5 inches",
      location: "Freshwater",
      food: "Vegetable-based flakes",
    },
    {
      name: "Bluey",
      species: "Blue Tang",
      length: "7 inches",
      location: "Saltwater",
      food: "Algae and marine flakes",
    },
    {
      name: "Disco",
      species: "Discus Fish",
      length: "5.5 inches",
      location: "Freshwater",
      food: "High-quality discus pellets",
    },
    {
      name: "Betty",
      species: "Betta Fish",
      length: "2.5 inches",
      location: "Freshwater",
      food: "Betta pellets and live/frozen foods",
    },
  ]
  
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
  