
var fruits = ['apple', 'orange'];
        fruits.push('kiwi');
        fruits[fruits.length-2] = 'pear';
        console.log(fruits.shift());
        fruits.unshift('apricot', 'peach');
console.log( fruits );

/*

 Задачка 3
 1. Создайте массив fruits с элементами «apple», «orange».
 2. Добавьте в конец значение «kiwi»
 3. Замените предпоследнее значение с конца на «pear». Код
 замены предпоследнего значения должен работать для
 массивов любой длины.
 4. Удалите первое значение массива и выведите его console.
 5. Добавьте в начало значения «apricot» и «peach».
 */