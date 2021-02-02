//// function declaration 
// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// function expression
// const doubleIt = function myFun(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// arrow function
// const doubleIt = num => num * 2;
// const result = doubleIt(50);
// console.log(result);

// const add = (x, Y) => x + Y;
// const result = add(5, 7);
// console.log(result);

// const give5 = () => 5;
// const result = give5();
// console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doMath(7, 5);
console.log(result);