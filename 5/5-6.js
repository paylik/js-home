
var fruits = ['Яблоко', 'Апельсин', 'Груша'];
var objekt = ('Варенько')

function returnNewArr(obj) {
    obj.push(objekt);
    return obj;
}
console.log( returnNewArr(fruits) );

/*

Задачка 
 Написать функцию которая принимает на вход
 2 параметра: массив, и элемент (любого типа).
 Этот элемент нужно добавить в конец массива.
 Функция должна вернуть массив с добавленным
 новым элементом.
 */