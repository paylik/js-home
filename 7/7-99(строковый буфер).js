function makeBuffer() {
    var text = '';
    
    return function (piece) {
        if (arguments.length == 0 ) {
            return text;
        }
       text += piece;
    };
};

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log( buffer2() );



// Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
//
//     Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer,
//     которая при вызове buffer(value) добавляет значение
// в некоторое внутреннее хранилище, а при вызове без аргументов
// buffer() – возвращает его.