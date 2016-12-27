
function summ(a, b) {
    if (arguments[1] === undefined) {
        return function (b) {
            return a + b;
        };
    } else {
        return a + b;
    }
}

console.log(summ(2, 3));
console.log(summ(2)(3));

//полиморфный калькулятор
// Write a single function that can be invoked by either
// sum(2,3); //5
// //or
// sum(2)(3); //5
// Both of these examples should return the sum of the 2 numbers.
