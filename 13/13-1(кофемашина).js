

function CofeMashine(power, capacity) {
    var WATER_HEAT_COPACITY = 4200;
    var waterAmount = 0;
    var timerId;
    console.log('Создана кофемашина мощностью ' + power + ' Ватт');

    this.waterAmount = function(amount) { //совмещённый геттер и сеттер
        console.log('amount = ' + amount );
        if (!arguments.length) return waterAmount;
        if (amount < 0) {
            throw new Error ('Значение должно быть положительным');
        }
        if (amount > capacity) {
            throw new Error ('Нельзя залить воды больше, чем ' + capacity + ' мл.');
        }
        waterAmount = amount;
    };
    console.log('Залили: ' + waterAmount);

    var self = this;
    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_COPACITY * 80 / power;
    }

    function onReady() {
        console.log('Ваш кофе готов');
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
        clearTimeout(timerId);
        console.log('Приготовление кофе остановлено');
    };
}

var cofeMashine = new CofeMashine(10000, 500);
cofeMashine.waterAmount(400);
cofeMashine.run();
console.log(cofeMashine.waterAmount() + 'waterAmount');
//cofeMashine.stop();