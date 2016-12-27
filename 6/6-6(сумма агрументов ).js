
function summ() {
    summ = 0;
    for (var i = 0; i < arguments.length; i++) {
        summ += arguments[i];
    } 
    return summ;
}
console.log (summ(1, 2, 3, 4));


/*
 Сумма аргументов
 sum() = 0
 sum(1) = 1
 sum(1, 2) = 3
 sum(1, 2, 3) = 6
 sum(1, 2, 3, 4) = 10
 */