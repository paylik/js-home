

function sumArgs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function (a, b) {
        return a + b;
    });
}
console.log( sumArgs(1, 2, 3, 4) ); // 10

//2 вариант (короткий)
function sumArgs1() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}
console.log( sumArgs1(1, 2, 3) ); // 6


// Создайте функцию sumArgs(),
// которая будет суммировать все свои аргументы:
// Для решения примените метод reduce к arguments,
// используя call, apply или одалживание метода.