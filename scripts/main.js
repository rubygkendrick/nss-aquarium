import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from "./Fishlist.js"
const fishList = FishList()

const parentHTMLElement = document.querySelector(".fishcard")


parentHTMLElement.innerHTML = FishList()