// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const allFish = getFish()


    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of allFish) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishcard">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} inches</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const allFish = getFish()
    const holyFish = []

    for (const fish of allFish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const allFish = getFish()
    const soldiers = []

    for (const fish of allFish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
        return soldiers
    }
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const allFish = getFish()
    const regularFish = []

    for (const fish of allFish) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}