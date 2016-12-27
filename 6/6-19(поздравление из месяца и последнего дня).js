
function getVillainName(birthday){
    var firstName = ['The Evil', 'The Vile', 'The Cruel', 'The Trashy',
        'The Despicable', 'The Embarrassing', 'The Disreputable',
        'The Atrocious', 'The Twirling', 'The Orange', 'The Terrifying', 'The Awkward'];

    var lastName = ['Mustache', 'Pickle', 'Hood Ornament', 'Raisin', 'Recycling Bin',
        'Potato', 'Tomato', 'House Cat', 'Teaspoon', 'Laundry Basket'];

    return firstName[birthday.getMonth()] + ' ' + lastName[birthday.getDate() % 10];

}

var date = new Date(1984, 19, 10);

console.log (getVillainName(date));
/*
 Description:

 Create a function, getVillainName, that returns a villain name based on the user's birthday.
 (The birthday will be passed to the function as a valid Date object, so for simplicity,
 there's no need to worry about converting strings to dates.)

 The first name will come from the month,
 and the last name will come from the last digit of the date.
 */