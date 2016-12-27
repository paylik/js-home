

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var bestName = '';
var maxTask = 0;

for (var name in tasksCompleted) {
    if (maxTask < tasksCompleted [name]) {
        maxTask = tasksCompleted [name];
        bestName = name;
}
}
console.log(bestName);

/*

 ДЗ 5-1
 Напиште код который выведет сотрудника который выполнил больше всех задач.

 */