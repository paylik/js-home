
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(image);
console.log("image width=" + image.width + " height=" + image.height + " title=" + image.title);


/*
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}
*/

/*
 function multiplyNumeric(obj) {

 for (var val in obj) {
 if ( +val != NaN ) {
 obj [val] *= 2;
 }}
 }
*/
/*

 ДЗ 5-2
 (Изменение численных свойств)
 Напишите функцию multiplyNumeric которая принимает на вход объект
 и возвращает объект в котором все числовые значения у свойств умножены на 2.


 */