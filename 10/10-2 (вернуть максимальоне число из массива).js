// 1 вариант
function getMaxNumber(arr) {
    max = arr[0];
    for (var i = 1; i<arr.length; i++) {
        if (arr[i] > max) {max = arr[i];}
    }
     return max;
}
console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15

// 2 вариант !!!!!!
function getMaxNumber2(arr) {

    return Math.max.apply(null, arr);
}
console.log(getMaxNumber2([1,30,40,2,7])); // 40
console.log(getMaxNumber2([-1,-15,-20,-2,-7])); // 15

// Необходимо написать функцию,
//     которая будет принимать на вход массив чисел
// и возвращать самое большое.
// getMaxNumber([1,30,40,2,7]); // 40
// getMaxNumber([1,15,-20,2,-7]); // 15
