
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt =function () {
    var value = this.crew * 1.5;
    return this.draft - value > 20;
    // или return this.draft - (this.crew * 1.5) > 20;
}


// пиратская задачка
//
// Ahoy matey!
//
//     You are a leader of a small pirate crew.
// And you have a plan. With the help of OOP you wish to make
// a pretty eficient system to identify ships with a heavy booty on board.
//
//     Unfortunattely for you, people weigh a lot this days,
// so how do you know if a ship if full of gold and not people?
//
//     You begin with writing a generic Ship class: