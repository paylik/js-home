

function add(a, b, c) {
    return a + b + c;
}

function sub(a, b) {
    return a - b;
}

console.log(add(1,2,3));
console.log(sub(4,2));

function decorator(f) {
    return function () {
        return 'Ответ: ' + f.apply(null, arguments);
    }
}

var add2 = decorator(add);
var sub2 = decorator(sub);

console.log(sub2(6, 3));
console.log(add2(5, 3, 5));
