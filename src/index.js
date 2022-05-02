import {choices, remove} from './helpers'
import foods from './foods'

const chosenFruit=choices(foods)
console.log(
    `I'd like one ${chosenFruit}, please

    Here you go: ${chosenFruit}
    
    Delicious! May I have another?  `
)

remove(foods,chosenFruit)
console.log(
    `I'm sorry, we're all out. We have ${foods.length} left.`
)
