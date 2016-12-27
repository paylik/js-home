



function isEmpty(obj) {
       for (var key in obj) {
        return false;
    }
    return true;
}
var todoList = {};
console.log( isEmpty(todoList) ); // true
todoList['homework'] = 'lesson5';
console.log( isEmpty(todoList) ); // false


/*

Задачка 1
Создайте функцию isEmpty(obj), которая
возвращает true, если в объекте нет свойств
и false — если хоть одно свойство есть.

 */