
function delay(func, time) {
    return function () {

        var setThis = this;
        var setArgs = arguments;

        setTimeout(function () {
            func.apply(setThis, setArgs);
            }, time);
        }
    }
function f(x) {
    console.log( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд