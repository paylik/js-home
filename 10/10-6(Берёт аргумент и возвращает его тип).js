
function getType(arg) {
    return typeof arg;
}

console.log(getType(null));
console.log(getType(true));
console.log(getType);
console.log(getType(3));
console.log(getType('text'));
console.log(getType(this.arguments));

// Write a JavaScript function which accepts an argument
// and returns the type. Note: There are six possible values
// that typeof returns: object, boolean, function, number, string, and undefined.
// Написать функцию JavaScript , которая принимает аргумент и возвращает тип .