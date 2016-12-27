



var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};
function sumSalaries(obj) {
    var result = 0
    for (var item in obj)
    {result += obj[item];
    }
    return result;
}
console.log (sumSalaries(salaries));

/*

Задачка 2
 Создайте функцию которая возвращает общий
 размер фонда зарплат (сумму) всего отдела.
 */