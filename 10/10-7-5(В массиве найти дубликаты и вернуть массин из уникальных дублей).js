
function duplicates(arr) {
    var first = [];
    var dup = [];

    for (var i = 0; i < arr.length; i++) {
        if (first.indexOf(arr[i]) >= 0 && dup.indexOf(arr[i]) < 0) {
            dup.push(arr[i]);
        } else {
            first.push(arr[i]);
        }
    } return dup;
    
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5', 'zut', 'zut']));

// Дан массив , найти дубликаты в этом массиве ,
// и возвращает новый массив из этих дублей.
//
// Примечание : цифры и их соответствующие строковые представления
// не следует рассматривать как дублирующие ( '1' !== 1).
//
// Given an array, find the duplicates in that array,
// and return a new array of those duplicates.
//
//     Note: numbers and their corresponding string representations
// should not be treated as duplicates (i.e., '1' !== 1).