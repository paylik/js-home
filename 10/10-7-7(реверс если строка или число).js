
function reverseIt(data){

    var argType = typeof data;


         if (argType === 'string') {
             return (data.split('').reverse().join(''));
         } else if (argType === 'number'){

             return (Number(data.toString().split('').reverse().join('')));
             //можно parseFloat или var a = (data.toStri....; return a;
         } else return data;

}

console.log(reverseIt('Hello'));
console.log(reverseIt(314159));
console.log(reverseIt("314159"));
console.log(reverseIt([]));



// Если строка или число - пишем задом наперёд, если другой тип, оставляем как есть

// You have to create a function named reverseIt.
//
//     Write your function so that in the case a string or a number
// is passed in as the data , you will return the data in reverse order. I
// f the data is any other type, return it as it is.
//
//     Examples of inputs and subsequent outputs:
//
//     "Hello" -> "olleH"
//
// "314159" -> "951413"
//
//     [1,2,3] -> [1,2,3]