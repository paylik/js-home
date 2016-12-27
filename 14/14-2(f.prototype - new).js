

var Lexus = {
    isCool: 'Hell yeah!'
};
function ModelF(type) {
    this.type = type;
}

ModelF.prototype = Lexus;

var car = new ModelF('Sport Coupe');

console.log(car.isCool);