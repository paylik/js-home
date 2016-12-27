
function add() {
    var summ = 0;
    for (var i = 0; i < arguments.length; i++) {
        summ += arguments[i] * (i+1);
    }
    return summ;
}

console.log(add(100,200,300)); //1400

// сумма элементов, умноженных на их порядковый номер
//
// This kata is all about adding numbers.
//
// You will create a function named add.
// This function will return the sum of all the arguments.
// Sounds easy, doesn't it??
//
// Well here's the twist.
// The inputs will gradually increase with their
// index as parameter to the function.
//
// add(3,4,5);
 /*
 returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
 */