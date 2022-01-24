// declaring a value named database whos value is an array of fish objects

const database = {
    fish: [
        {
            
            name: "Bart",
            food: "crustaceans",
            length: 3,
            location: "opry mills",
            species: "fish",
            image: 'https://m.media-amazon.com/images/I/61GYaF2xP-L._SX355_.jpg'
        },

        {
            name: "stephen",
            food: "soylent",
            length: 20,
            location: "Mitchells Deli",
            species: "fish",
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sebastes_mentella.jpg/1200px-Sebastes_mentella.jpg'
        },

        {
            name: "T-bone",
            food: "salad",
            length: 10,
            location: "Farm Burger",
            species: "fish",
            image: 'https://www.tfhmagazine.com/-/media/Images/TFH2-NA/US/articles/102_adding_color_going_green.jpg'
        },

        {
            name: "spike",
            food: "cereal",
            length: 5,
            location: "Barista Parlor",
            species: "fish",
            image: 'https://image.shutterstock.com/image-photo/orange-goldfish-on-white-260nw-94878781.jpg'
        },
    ]



}

// export const mostHolyFish = (database.fish) => {
//     // 3, 6, 9, 12, etc... fish
//     const holyFish = []

//     for (fish) {

//     }

//     return holyFish
// }

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}


// this function returns a copy of the fish array
// exporting the function to be used in other modules
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}