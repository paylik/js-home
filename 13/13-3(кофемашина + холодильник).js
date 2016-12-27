
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
    }
}

function Ref(power) {
    Mashine.apply(this, arguments);
    this.getSettings = function () {
        console.log('Холодильник мощностью ' + this.__power + '. Состояние ' + this.__enabled);
    }
}

var cofeMashine = new CofeMashine(10000);
cofeMashine.getSettings();

var ref = new Ref(10000);
ref.getSettings();
