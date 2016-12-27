

var arr = [1, 2, 3, 4, 5];

function arrRandom(a, b) {
    return Math.random() - 0.5;
}

arr.sort(arrRandom);

console.log (arr);


/*

 Задание 3 (Random sort)
 Необходимо отсортировать массив в случайном порядке используя метод sort.
 var arr = [1, 2, 3, 4, 5];

 arr.sort(ваша функция);


 */