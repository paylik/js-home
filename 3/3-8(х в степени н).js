function pow(x, n) {

    var counter = 0;
    var y = 1
    while (counter < n) {
        y = y * x;
        counter += 1;
    }
    console.log(y);
}
pow(1, 100);

/*Задание 6 (pow)
 Напишите функцию pow(x,n), которая возвращает x в степени n.
  Иначе говоря, умножает x на себя n раз и возвращает результат.
 pow(3, 2) = 3 * 3 = 9
 pow(1, 100) = 1 * 1 * ...* 1 = 1

 */