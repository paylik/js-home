

function cropStr (str) {
   if (str.length < 20 )
   {return str;}
   else {return str.substring(0, 20) + '...';}
   }

console.log ( cropStr( '[SPAM] How to earn fast money?' ) );


/*
 Задание 3 (Троеточие)
 Напишите функцию, которая принимает на вход строку и возвращает ее неизменной
 если ее длина не превышает 20 символов.
 Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'

 */