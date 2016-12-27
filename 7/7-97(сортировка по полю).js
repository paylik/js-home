

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;

    }
}


users.sort(byField('name'));
users.forEach(function(user) {
    console.log( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
    console.log( user.name );
});

//
// Напишите функцию byField(field),
// которую можно использовать в sort для сравнения объектов по полю field,
// чтобы пример выше заработал.