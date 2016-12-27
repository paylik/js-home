

function Factory(color, size) {
    this.color = color || 'green';
    this.size = size || 500;

    this.temp = 25;
    this.vol = 0;

    this.fill = function (vol, temp) {
        this.vol = vol;
        this.temp = temp;

    }
}

var cup1 = new Factory('blue', 1000);

console.log (cup1);

cup1.fill(300, 90);

console.log (cup1);

var stakan = {color: 'transpared'};

cup1.fill.call(stakan, 600, 60);// позаимствовали метод у cup1

console.log (stakan);