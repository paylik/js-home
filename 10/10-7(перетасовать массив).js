
function suffle(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i+1));
        var itemAtIndex = arr[randomIndex];

        arr[randomIndex] = arr[i];
        arr[i] = itemAtIndex;
    }
return arr;
}

var sortArr = [1,2,3,4,5,6,7,8,9,0];

console.log(suffle(sortArr));

//Write a function suffle(arr) to shuffle an array.
//Напишите функцию Суффле ( ARR) перетасовать массив .