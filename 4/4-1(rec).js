

function sumTo(n) {
   if (n!=1)
   {return n + sumTo (n-1)
   } else {return n}
}

console.log( sumTo(6) );


/* Задачка 1
 sumTo(3) = 3 + 2 + 1 = 6
 sumTo(4) = 4 + 3 + 2 + 1 = 10
 Напишите функцию sumTo(n), которая для данного n
 вычисляет сумму чисел от 1 до n



    */