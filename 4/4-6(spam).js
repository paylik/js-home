

function checkSpam (str) {
   str = str.toLowerCase();
   if (str.indexOf( 'spam' ) >= 0 || str.indexOf( 'sex' ) >= 0 )
   {return true;}
   else {return false;}
   }

console.log ( checkSpam( '[SPAM] How to earn fast money?' ) );


/* Задачка 


 Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

    */