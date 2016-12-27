
function applyAll(func) {
   // return func.apply(this, [].slice.call(arguments, 1));
    arguments.slice = [].slice;
    return func.apply(this, arguments.slice(1));
}

console.log( applyAll(Math.max, 2, -2, 3) ); // 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2


function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}
function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}
console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

// Напишите функцию applyAll(func, arg1, arg2...),
// которая получает функцию func и произвольное количество аргументов.
//
//     Она должна вызвать func(arg1, arg2...),
// то есть передать в func все аргументы, начиная со второго,
// и возвратить результат.