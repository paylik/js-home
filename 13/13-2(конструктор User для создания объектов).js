

function User() {

    var firstName;
    var surName;

   this.setFirstName = function (text) {
       firstName = text;
   };
    this.setSurname = function (text) {
        surName = text;
    };
    this.getFullName = function () {
        return firstName + ' ' + surName;
    };

}
var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
console.log( user.getFullName() ); // Петя Иванов