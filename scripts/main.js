// import the get fish function from the database module
// so that you have access to a copy the array of fish objects

import { getFish } from './database.js'

// invoke the getFish function by making it
// the value of a variable

const allFish = getFish()



for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { FishList } from './FishList.js'

// /*
//     What is the CSS selector for the element where you
//     want to display the fish?

//     Use . for elements with a "class" attribute
//     Use # for elements with an "id" attribute
//  */


const parentHTMLElement = document.querySelector(".fish-collection")


parentHTMLElement.innerHTML = FishList()