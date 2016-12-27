

function randomNumber (min, max) {
   var rand = min + Math.random() * (max - min);
   rand = Math.round(rand);
   return rand;

}

console.log( randomNumber(1, 6) );


/* Задачка 2
 Написать функцию вычисляющую факториал числа n
 n! = n * (n - 1) * (n - 2) * … * 1



    */