


var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(arr) {

    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    console.log(obj);
    return Object.keys(obj);
}


console.log( unique(strings) );

/*

 Задание 6 (Уникальные элементы массива)
 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).
 var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

 console.log( unique(strings) ); // кришна, харе, 8-()


 */