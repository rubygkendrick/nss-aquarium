import { getLocation } from "./database.js"

export const Locations = () => {
    // Invoke the function that you imported from the database module
    const allLocations = getLocation()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locations">'

    // Create HTNL representations of each fish here

    for (const local of allLocations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="locationsection">
            
            \n<div class="locationcard_name">${local.location}</div>

            <div class="locationcard_description">${local.description}</div>

            <div class="locationcard_quote">"${local.accessibility}" - Martin</div>\n
         
        </section>

        `
    }
    htmlString += `</article>`

    return htmlString
}