

    var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
    
    var arrLengths = arr.map(function(name) {
        return name.length;
});
console.log( arrLengths );



/*
 Задачка
 Код ниже получает из массива строк новый массив,
 содержащий их длины. Перепишите его: уберите цикл,
 используйте вместо него метод map.
 
 
 var arrLength = [];
 for (var i = 0; i < arr.length; i++) {
 arrLength[i] = arr[i].length;


 */