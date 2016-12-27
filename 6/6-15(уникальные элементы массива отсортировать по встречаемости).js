


var classesNames = ['header', 'menu', 'menu__item','menu__item',
    'menu__item', 'link','link','link_type_red', 'footer',
    'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tab__item',
    'tab__item','tab__item','tab__item', 'image', 'image'];


    var classesObj = {};


classesNames.forEach( function (elem) {
    if ( !classesObj[elem]) {
        classesObj[elem] = 1;
    } else {
        classesObj[elem] += 1;
    }
});
console.log(classesObj);
var result = [];

for (var className in classesObj) {
    result.push(className);
}

result.sort(function (a, b) {
    return classesObj[b] - classesObj[a];
});

console.log( result );

/*

Получить массив с уникальными именами классов, 
отсортированные по частоте использования

 */