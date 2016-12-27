
function isPangram(string){

    var s = string.toLowerCase();

    var letters = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < letters.length; i++) {
        if (s.indexOf(letters.charAt(i)/*letters[i]*/) === -1) {
            return false;
        }
    } return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

// Проверить, является ли предложение панграм (должны быть все буквы алфавита)
// A pangram is a sentence that contains every single letter
// of the alphabet at least once. For example,
// the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.