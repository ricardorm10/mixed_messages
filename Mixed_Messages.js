//Creating elements for the phrase.
const components = {
    looks: ['really handsome.', 'taller than yesterday.', 'absolutely amazing.'],
    smells: ['a pack of lions.', 'the most beautiful flower.', 'mustard.'],
    remind: ['Usain Bolt.', 'Robert De Niro.', 'Chewbacca.' ]
}

//Array for where to push the phrase.
let phrase = []

//Function to create a random number.
let randomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

//Loop over the properties of the object.
for(let prop in components) {
    switch(prop){
        case 'looks':
            phrase.push(`You are ${components[prop][randomNumber(components.looks.length)]}`)
            break;
        case 'smells':
            phrase.push(`You smell like ${components[prop][randomNumber(components.smells.length)]}`)
            break;
        case 'remind':
            phrase.push(`You remind me of ${components[prop][randomNumber(components.remind.length)]}`)
            break;
        default:
            phrase.push('Not enough information.')
    }
}
//Logging the pushed array.
console.log(phrase);