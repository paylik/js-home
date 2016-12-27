

var calculator;
calculator = {

    read: function () {
        this.a = +prompt('Вветите первое значение', 0);
        this.b = +prompt('Вветите первое значение', 0);
    },

    sum: function () {
        return this.a + this.b;
    },

    mul: function () {
        return this.a * this.b;
    }
};

calculator.read();
console.log (calculator.sum());
console.log (calculator.mul());


/*
 Создайте объект calculator с тремя методами:

 read() запрашивает prompt два значения и сохраняет их как свойства объекта
 sum() возвращает сумму этих двух значений
 mul() возвращает произведение этих двух значений

 */
