function makeBuffer() {
    var text = '';
    
    function buffer (piece) {
        if (arguments.length == 0 ) {
            return text;
        }
       text += piece;
    };
     buffer.clear = function () {
         text = '';
     }
    return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
console.log( buffer() ); 

buffer.clear();

console.log( buffer() );

//
// Добавьте буферу из решения задачи Функция -
// строковый буфер метод buffer.clear(),
//     который будет очищать текущее содержимое буфера: