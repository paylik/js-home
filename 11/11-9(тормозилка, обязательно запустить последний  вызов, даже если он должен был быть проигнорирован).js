

var f = function(a) {
    console.log(a)
};

function throttle(func, time) {
    var flag = false;
    var args;
    var self;

    function wrapper() {
        if (flag) {
            args = arguments;
            self = this;
            return};


    func.apply(this, arguments);

    flag = true;

    setTimeout(function () {
        flag = false;
        if (args) {
            wrapper.apply(self, args);
            self = args = false;
        }
    }, time)}
    return wrapper;
}

var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется