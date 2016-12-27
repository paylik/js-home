
function toUpper(str) {

    var words = str.split(' ');

    return words.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);

    }).join(' ');

}

console.log(toUpper('the quick brown fox'));

// Write a JavaScript function that accepts a string
// as a parameter and converts the first letter of each
// word of the string in upper case. Go to the editor
// Example string: the quick brown fox
// Expected Output: The Quick Brown Fox

// Написать функцию JavaScript , которая принимает строку
// в качестве параметра и преобразует первую букву каждого
// слова строки в верхнем регистре

