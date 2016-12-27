
function pattern(n){
    var output = '';
    var i;

    if (n > 0) {
        var result = [];
        var line = Array(n).join(' ');

        for (i = 1; i <= n; i++) {
            line += (i % 10);
        }
        result.push(line);

        for (i = 1; i < n; i++) {
            var string = result[i-1].substring(1) + ' ';
            result.push(string);
        }
        output = result.join('\n');
    }

    return output;
}

console.log(pattern(8));

// You have to write a function pattern which returns the following Pattern
// (See Examples) upto n rows, where n is parameter.
//
//     Rules/Note:
//
// If the Argument is 0 or a Negative Integer then it should return "" i.e.
// empty string.
//     The length of each line = (2n-1).
// Range of n is (-∞,100]
// Examples:
//
//     pattern(5):
//
//     12345
//    12345
//   12345
//  12345
// 12345