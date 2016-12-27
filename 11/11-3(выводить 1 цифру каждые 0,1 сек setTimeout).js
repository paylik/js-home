

function printNumbersInterval(num) {
    var i = 0;
    var timerId = setTimeout (function tick() {
        console.log (i);
        if (i < num) {setTimeout(tick, 100);}
        i++;
    }, 100);
}
printNumbersInterval(20);
