
Array.prototype.reverse = function () {
    var array = [];
    var lenght = this.length;

    for(var i = lenght - 1; i >= 0; i--) {
        array.push(this[i]);
    }
    for (var i = 1; i < lenght; i++) {
        this[i] = array[i];
    }
    return this;
}


// Создать свой метод reverse для массива

// The Array's reverse() method has gone missing! Re-write it, quick-sharp!
//
// When this method is called, it reverses the order of the items in the original array.
// Then then it returns that same, original array.
// No new arrays should need to be created to pass this kata.
//
//     Here's an example:
//
// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
//input;           // == [4, 3, 2, 1]  // items reordered in the original array