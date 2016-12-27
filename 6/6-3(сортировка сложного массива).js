var arr = ['Яблоко', 56, 6888, 65, 'Апельсин', 55, 'Груша'];

    arr.sort( function (a, b) {
        if(+a && +b) {
        return a-b;
        } else if(+b) {
            return -1;
        } else return 1;

    })
    console.log(arr);
