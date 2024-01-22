import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from "./fish.js"
const fishList = FishList()

const parentHTMLElement = document.querySelector(".fishcard")

parentHTMLElement.innerHTML = FishList()



import { mostHolyFish } from "./fish.js"
const holyFish = mostHolyFish()

import { soldierFish } from "./fish.js"
const soldiers = soldierFish()

import { nonHolyFish } from "./fish.js"
const regularFish = nonHolyFish()


import { TankTips } from "./tips.js"
const tankTipsList = TankTips()

const parentHTMLElementTips = document.querySelector(".tipcard")
parentHTMLElementTips.innerHTML = tankTipsList



import { Locations } from "./locations.js"
const locationsList = Locations()

const parentHTMLElementLocals = document.querySelector(".locationcard")
parentHTMLElementLocals.innerHTML = locationsList

