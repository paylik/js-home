

function spread(func, args) {
    return func.apply(void 0, args);

}


console.log( spread(function(x,y){return x+y}, [1,2])); //3
// Equivalent: (function(x,y){return x+y})(1,2)


// You must create a function, spread,
// that takes a function and a list of arguments to be applied to that function.
// You must make this function return the result of calling
// the given function/lambda with the given arguments.

// Вы должны создать функцию , распространения ,
// которая принимает функцию и список аргументов ,
// которые должны применяться к этой функции .
// ы должны сделать эту функцию вернуть результат вызова данной ф
// ункции / лямбда с заданными аргументами .