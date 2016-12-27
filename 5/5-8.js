var fruits = ['Яблоко', 'Апельсин', 'Груша'];
function getRandom(arr) {
        var max = arr.length - 1;
        var rand = Math.floor(Math.random() * (max + 1));
        return arr[rand];
}
console.log(getRandom(fruits));


/*

 Задачка 3
 Написать функцию которая принимает на вход массив и
 возвращает случайное значение из этого массива.
 */