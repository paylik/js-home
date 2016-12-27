

var Vehicle = {
    canRoll: true,
    speed: null,
    plases: null,
    isGoing: false
};

var Moto = {
    __proto__: Vehicle, //(назначили прототип)
    plases: 2,
    wheels: 2
};

//Moto.__proto__ = Vehicle; (назначили прототип)

console.log(Moto.canRoll);
console.log(Moto.plases);

for (var key in Moto) {
    if (Moto.hasOwnProperty(key)) {
        console.log(key + ' = ' + Moto[key]);
    }
}


