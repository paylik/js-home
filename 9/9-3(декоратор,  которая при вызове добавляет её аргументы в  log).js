function work(a, b) {
    console.log( a + b ); // work - произвольная функция
}

function makeLogging(fanc, log) {
    function wrapper() {
       // log.push([].slice.call(arguments));
        arguments.slice = [].slice;
        log.push(arguments.slice());
        return fanc.apply(this, arguments);
    }
    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    console.log( 'Лог: ' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

// Создайте декоратор makeLogging(func, log),
// для функции func ( с любым набором аргументов)возвращающий обёртку,
// которая при каждом вызове добавляет её аргументы в массив log.