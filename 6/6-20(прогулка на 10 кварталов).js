

function isValidWalk(walk) {

    var distansX = 0;
    var distansY = 0;
    var distansWalk = walk.length;

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n' : distansY--; break
            case 's' : distansY++; break
            case 'w' : distansX--; break
            case 'e' : distansX++; break
        }
    }
    return distansWalk === 10 && distansX === 0 && distansY ===0;
}

console.log( isValidWalk(['n','n','w','w','s','s','e','e','n','s']) );



/*
 You live in the city of Cartesia where all roads are laid out in a perfect grid.
 You arrived ten minutes too early to an appointment,
 so you decided to take the opportunity to go for a short walk.
 The city provides its citizens with a Walk Generating App on their phones --
 everytime you press the button it sends you an array of one-letter strings
  representing directions to walk (eg. ['n', 's', 'w', 'e']).
  You know it takes you one minute to traverse one city block,
  so create a function that will return true if the walk
  the app gives you will take you exactly ten minutes (
  you don't want to be early or late!)
  and will, of course, return you to your starting point.
  Return false otherwise.
 */