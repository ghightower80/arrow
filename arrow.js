//arrow function shorthand
const double = arr => arr.map (val => val * 2)

//refactor function to use arrow functions:
const squareAndFindEvens = numbers => numbers.map (val => val **2).filter(square => square % 2 ===0)