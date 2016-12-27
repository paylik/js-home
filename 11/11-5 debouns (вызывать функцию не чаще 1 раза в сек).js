function f(x) {
    console.log(x);
}

function debounce(f, time) {
    var state = true;

    return function wraper() {

        if (!state) {return;}

        f.apply(this, arguments);

        state = false;
        setTimeout(function () {
            state = true;
        }, time);
    }


}
var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор