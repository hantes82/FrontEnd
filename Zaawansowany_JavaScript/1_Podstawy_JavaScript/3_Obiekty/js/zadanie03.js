/*#### Zadanie 3
W pliku **zadanie03.js** możesz znaleźć przykładowy konstruktor dla robota. Konstruktor oczekuje, że podasz tylko imię robota.
Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
Utwórz kilka robotów i poszukaj, czy w napisanym kodzie nie ma błędów.*/


var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};

var RobotOne = new Robot ("John");  //Dodaję robota o imieniu John
var RobotTwo = new Robot ("Clark")  //Dodaję robota o imieniu Clark
var RobotThree = new Robot ("George");  //Dodaję robota o imieniu George
console.log(RobotOne.name);             //Wyświetlam imię pierwszego robota
RobotTwo.sayHi("Jerry");                //RobotOna wita się z Jerrym :-)
RobotThree.changeName("Bob");           //Zmieniam imię robota trzeciego
console.log(RobotThree.name);           //Wyświetlam imię robota trzeciego
console.log(RobotOne.isFunctional);     //Wyświetlam isFunctional robota pierwszego
RobotOne.isFunctional = false;          //Zmieniam isFunctional robota pierwszego
console.log(RobotOne.isFunctional);     //Wyświetlam isFunctional robota pierwszego po zmianie
RobotOne.fixIt();                       //Naprawiam robota pierwszego
console.log(RobotOne.isFunctional);     //Wyświetlam isFunctional po naprawie