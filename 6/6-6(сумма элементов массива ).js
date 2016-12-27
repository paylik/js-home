var test1 = [1,2,3,4,5,6,7,8,9,10];
var test2 = [71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38];
function sum(array) {

        var result = array.reduce(function (summ, current) {
        return current + summ;
    });
    return result;
}
console.log (sum(test2));


/*
 Make the sum() function return the sum of the values in the passed in array.
 Your solution must use the reduce() function of the built-in javascript Array object.
 If you're not familiar with reduce(), reading over the documentation may help.
 */