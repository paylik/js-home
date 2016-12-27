
function count (string) {

    var arr = string.split('');
    var obj = {};

    
    arr.forEach(function (elem) {
        if (!obj[elem]) {
            obj[elem] = 1;
        } else {
            obj[elem] += 1;
        }

    });

    return obj;
}
console.log(count('This is just an example of how you can write your own TDD tests'));

// посчитать буквы в строке и поместить результат в обьект
// The main idea is to count all the occuring characters(UTF-8) in string.
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }