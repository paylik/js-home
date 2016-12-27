var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i=0; i<classes.length; i++){
        if(classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join(' ');
}


addClass(obj, 'new'); // obj.className='open menu new'
console.log( obj.className );

addClass(obj, 'open'); // без изменений
console.log( obj.className );

addClass(obj, 'me'); // obj.className='open menu new me'
console.log( obj.className ); // "open menu new me"

/*

 Задачка 1
 В объекте есть свойство className, которое содержит
 список «классов» – слов, разделенных пробелом.
 Создайте функцию addClass(obj, cls), которая добавляет в
 список класс cls, но только если его там еще нет.
 Ваша функция не должна добавлять лишних пробелов.

 addClass(obj, 'new'); // obj.className='open menu new'
 addClass(obj, 'open'); // без изменений
 addClass(obj, 'me'); // obj.className='open menu new me'
 console.log( obj.className ); // "open menu new me"

 */