
function fibonacci(n) {
    if (n < 0) {
        return [];
    } else {
        var arr = [0, 1];

        for (var i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];

        }
        arr = arr.slice(0, n);
        return arr;
    }
}
console.log(fibonacci(3));

// массив из чисел Фибоначчи (из чила n получить массив из n элементов)
// The function 'fibonacci' should return an array of fibonacci numbers.
// The function takes a number as an argument to decide how many no.
// of elements to produce. If the argument is less than
// or equal to 0 then return empty array
//
// Example:
//
//     fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []