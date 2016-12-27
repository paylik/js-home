


function addf(x) {
    return function (y) {
        return (x + y);
    }
}


console.log (addf(3)(4));

/*
 Напишите функцию складывает числа из 2х
 вызовов
 addf(3)(4); //7


 */