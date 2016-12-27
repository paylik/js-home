

function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log( sumTo(4) );


/* Задачка 1
 sumTo(3) = 3 + 2 + 1 = 6
 sumTo(4) = 4 + 3 + 2 + 1 = 10
 Напишите функцию sumTo(n), которая для данного n
 вычисляет сумму чисел от 1 до n



    */