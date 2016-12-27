
function Mashine(power) {
    this.__power = power + ' Ватт';
    this.__enabled = false;

    this.enable = function () {
        this.__enabled = true;
    };
    this.deseble = function () {
        this.__enabled = false;
    };
}

function CofeMashine(power) {
    Mashine.apply(this, arguments);
    this.getSettings = function () {
        console.log('Кофемашинка мощностью ' + this.__power + '. Состояние ' + this.__enabled);
    };
    this.color = 'blue';
}

function VintageCM(power) {
    CofeMashine.apply(this, arguments);
    this.__pedal = 'up';
    this.color = 'brawn';
    this.setPedalStatus = function (direction) {
        if (direction === 'up' || direction === 'down') {
            this.__pedal = direction;
        }
    };
    this.getPedalStatus = function () {
        return 'Состояние педали: ' + this.__pedal;
    }
}

var vintageCM = new VintageCM(2000);
vintageCM.getSettings();
console.log(vintageCM.getPedalStatus());
vintageCM.setPedalStatus('down');
console.log(vintageCM.getPedalStatus());
console.log('Цвет: ' + vintageCM.color);


