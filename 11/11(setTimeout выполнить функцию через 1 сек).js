//1 вариант
for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {
        console.log(i)
    }, 10, i);
}
//2 вариант
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 10);
    })(i);
}
