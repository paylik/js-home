var array = [161929, 29219212, 39594924, 48222825];


function findValue(arr, value) {
       for (var i =1; i < arr.length; i++){
               if( arr[i] === value )
                   return i;
       } return -1;
}
console.log(findValue(array, 48222825));


/*

 Задачка 5
 Создайте функцию find(arr, value), которая ищет в массиве
 arr значение value и возвращает его позицию, если найдено,
 или -1, если не найдено.
 */