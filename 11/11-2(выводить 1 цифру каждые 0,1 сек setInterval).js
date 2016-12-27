

function printNumbersInterval(num) {
    var i = 0;
    var timerId = setInterval (function () {
        console.log (i);
        if (i == num) {
            clearInterval(timerId);
        };
        i++;
    }, 100);
}
printNumbersInterval(20);