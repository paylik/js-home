
function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        
        (function (i) {
            

        callbacks.push(function() {
            return i;
        });
    })(i);
    }

    return callbacks;
}

var callbacks = createFunctions(5);

console.log (callbacks[0]());
console.log (callbacks[3]());


/*
 We want to create a function, which returns an array of functions,
 which return their index in the array. For better understanding, here an example:

 var callbacks = createFunctions(5); // create an array, containing 5 functions

 callbacks[0](); // must return 0
 callbacks[3](); // must return 3
 We already implemented that function, but when we actually run the code,
 the result doesn't look like what we expected. Can you spot, what's wrong with it?
 A test fixture is also available

 */
