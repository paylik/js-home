var Ghost = function() {

    var colors = ['white', 'yellow', 'purple', 'red'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
};

var ghost = new Ghost();
console.log(ghost.color);


//this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * colors.length)];
//прикольный вариант

// Присвоить случайный цвет Ghosty
// Create a class Ghost
//
// Ghost objects are instantiated without any arguments.
//
//     Ghost objects are given a random color attribute of white"
// or "yellow" or "purple" or "red" when instantiated
//
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"
// c# Ghost ghost = new Gost(); ghost.GetColor(); // => "white" or "yellow" o
// r "purple" or "red"