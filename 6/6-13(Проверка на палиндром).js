
function isPal(string) {
    var newStr;
    var newStrArr;
    var palidr;

    if (typeof string !== 'number') {
        newStr = string.toLowerCase();
    } else {newStr = string.toString();
    }

    newStrArr = newStr.split('');
    newStr = newStr.replace(/\s/g, '');

newStrArr.reverse();

    palidr = newStrArr.join('').replace(/\s/g, '');

    if (+palidr != NaN) {
        +palidr;
    }

    if (palidr === newStr ) {
        return true;
    } else {
        return false;
    }


}


console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
/*

 Задание 5 (Проверка на палиндром)
 Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно,
 А роза упала на лапу Азора.
 Необходимо написать функцию isPal(string) которая возвращает true или false
 в зависимости от того является ли строка палиндромом или нет.
 console.log(isPal('Anna')); // true
 console.log(isPal('А роза упала на лапу Азора')); //true
 console.log(isPal('Вася')); //false
 console.log(isPal('12321')); //true
 console.log(isPal('123212')); //false

 */