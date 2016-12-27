


function identityf(x) {
    return function () {
        return x;
    }

}

var idf = identityf(7);
console.log (idf());

/*
 Напишите функцию которая принимает аргумент и
 возвращает функцию которая возвращает этот
 аргумент.
 var idf = identityf(3);
 console.log(idf()); // 3

 */