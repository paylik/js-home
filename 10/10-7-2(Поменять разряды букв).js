

function swap(str){
    var arr = str.split('');
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            newArr.push(arr[i].toUpperCase());
        } else {
            newArr.push(arr[i].toLowerCase());
        }
    }
    return newArr.join('');
}

console.log(swap('HelloWorld'));
console.log(swap('CodeWars'));

//Поменять разряды букв
// Given a string, swap the case for each of the letters.
//
//     e.g. CodEwArs --> cODeWaRS