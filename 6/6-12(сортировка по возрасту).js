
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function sortAge(personA, personB) {
    return personA.age - personB.age;
}
people.sort (sortAge);
console.log(people);
console.log(people[0].age);


/*

 Задание 4 (Object sort)
 Напишите код, который отсортирует массив объектов people по полю age.
 Например:
 var vasya = { name: 'Вася', age: 23 };
 var masha = { name: 'Маша', age: 18 };
 var vovochka = { name: 'Вовочка', age: 6 };

 var people = [ vasya , masha , vovochka ];

 ... ваш код ...

 // теперь people: [vovochka, masha, vasya]
 console.log(people[0].age) // 6
 Выведите список имён в массиве после сортировки.


 */