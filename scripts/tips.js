// Import the function that returns a copy of the fish array
import { getTips } from "./database.js"

export const TankTips = () => {
    // Invoke the function that you imported from the database module
    const allTips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tankTips">'

    // Create HTNL representations of each fish here
    for (const tip of allTips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tipcard">
            
            <li class="tip__desc">${tip.description}</li>
         
        </section>



        `
    }
    htmlString += `</article>`

    return htmlString
}