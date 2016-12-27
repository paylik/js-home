

function Calculator() {

    var methods = {
        '+' : function (a, b) {
            return a + b;
        },
        '-' : function (a, b) {
            return a - b;
        }
    };
    
    this.calculate = function (str) {
        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](+a, +b);
        
    };
    
    this.addMethod = function (name, func) {
        methods[name] = func;
        };
    }


var calc = new Calculator;

console.log( calc.calculate('3 + 7') ); // 10



var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8

//
//
// Задание 2 (Calculator)
// Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
//     Эта задача состоит из двух частей, которые можно решать одна за другой.
//     Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2»,
// с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции),
// и возвращает результат. Понимает плюс + и минус -. Пример использования:
//     var calc = new Calculator;
//
// console.log( calc.calculate('3 + 7') ); // 10
// Второй шаг — добавить калькулятору метод addMethod(name, func),
//     который учит калькулятор новой операции. Он получает имя операции name
// и функцию от двух аргументов func(a,b), которая должна её реализовывать.
//     Например, добавим операции умножить , поделить / и возвести в степень *:
// var powerCalc = new Calculator;
// powerCalc.addMethod('*', function(a, b) {
//     return a * b;
// });
// powerCalc.addMethod('/', function(a, b) {
//     return a / b;
// });
// powerCalc.addMethod('**', function(a, b) {
//     return Math.pow(a, b);
// });
//
// var result = powerCalc.calculate('2 ** 3');
// console.log( result ); // 8
// •	Поддержка скобок и сложных математических выражений в этой задаче не требуется.
// •	Числа и операции могут состоять из нескольких символов.
//     Между ними ровно один пробел.
// •	Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
