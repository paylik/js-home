
var date = new Date(2012, 1, 23);
function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}

console.log( getWeekDay(date) );


/*
 Имя дня недели
 Создайте функцию getWeekDay(date), которая выводит
 текущий день недели в коротком формате 'пн', 'вт', … 'вс'.
 var date = new Date(2012,0,3); // 3 января 2012
 console.log( getWeekDay(date) ); // Должно вывести 'вт'
 */