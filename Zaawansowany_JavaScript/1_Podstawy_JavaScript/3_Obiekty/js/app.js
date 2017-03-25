/*#### Zadanie 1
Stwórz obiekt samochód, utwórz dla niego odpowiednie atrybuty i metody.
###### Atrybuty:
1. markę,
2. kolor,
3. liczbę przejechanych kilometrów (na początku **0**).

###### Metody:
1. ```printCarinfo()``` &ndash; metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
2. ```drive(km)``` &ndash; która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.
*/

var car = {
    mark: "Volvo",
    color: "Silver",
    distance: 0,
    carInformation: function() {
        console.log ("Mark - " +this.mark+", Color - "+this.color+" Distance - "+this.distance);
    },
    drive: function(km) {
        this.distance = km;
    }
    
}
car.carInformation();
car.drive(10);
car.carInformation();
for (var prompt in car) {
    alert(prompt + ': ' + car[prompt]);
}

/*#### Zadanie 2
Do obiektu samochód z zadania pierwszego dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj ten nowy atrybut poza ciałem obiektu.
Dodaj też następujące metody:
 1. metodę dodającą wpis do tej tablicy,
 2. metodę wyświetlającą wszystkie przeglądy samochodu.

Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.*/

car.dateOfCheck = [];
car.checkAdd = function(date) {
    this.dateOfCheck.push(date);
}
car.checkInfo = function() {
    for (var i=0; i<this.dateOfCheck.length; i++) {
        console.log (this.dateOfCheck[i]);
    }
}
car.checkAdd("1982");
car.checkInfo();



/*#### Zadanie 4
Stwórz konstruktor dla obiektów ```Rectangle```, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```getArea()``` &ndash; metoda ma zwracać pole powierzchni,
  2. ```getPerimiter()``` &ndash; metoda ma zwracać obwód.

Następnie stwórz kilka obiektów i zobacz, czy metody działają tak jak powinny.*/


function Rectangle (rectLong, rectWid) {
    this.length = rectLong;
    this.width = rectWid;
}
Rectangle.prototype.getPerimiter = function () {
    var long = 2*this.length+2*this.width;
    console.log("Obwód jest równy: "+long+".");
}

Rectangle.prototype.getArea = function () {
    var area = this.length*this.width;
    console.log("Pole jest równe: "+area+".");
}


var RectangleOne = new Rectangle (10, 5);
var RectangleTwo = new Rectangle (10, 10);
RectangleOne.getArea();
RectangleTwo.getArea();
RectangleOne.getPerimiter();
RectangleTwo.getPerimiter();
   
/*#### Zadanie 5
Stwórz konstruktor dla obiektów ```Calculator```. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```add(num1, num2)``` &ndash; metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  2. ```multiply(num1, num2)``` &ndash; metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  3. ```subtract(num1, num2)``` &ndash; metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  4. ```divide(num1, num2)``` &ndash; metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  5. ```printOperations()``` &ndash; metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
  6. ```clearoperations()``` &ndash; metoda ma wyczyścić wszystkie operacje z pamięci.

**Pamiętaj o używaniu ```this```**.*/

function Calculator() {
    this.array=[];
}

Calculator.prototype.add = function (num1, num2) {
    var result = num1+num2;
    this.array.push("multiplied "+num1+" with "+num2+" got "+result);
    console.log(result);
}
Calculator.prototype.multiply = function (num1, num2) {
    var result = num1*num2;
    this.array.push("multiplied "+num1+" with "+num2+" got "+result);
    console.log(result);
}
Calculator.prototype.substract = function (num1, num2) {
    var result = num1-num2;
    this.array.push("substracted "+num1+" from "+num2+" got "+result);
    console.log(result);
}
Calculator.prototype.divide = function (num1, num2) {
    var result = num1/num2;
    this.array.push("divided "+num1+" to "+num2+" by "+result);
    console.log(result);
}
Calculator.prototype.printOperations = function () {
    for(var i=0;i<this.array.length;i++) {
        console.log (this.array[i]);
    }
}
Calculator.prototype.clearOperations = function () {
    this.array = [];
}

var calc = new Calculator();
calc.add(5,5);
calc.multiply(5,5);
calc.substract(5,5);
calc.divide(10,5);
calc.printOperations(); //drukuję zawartość tablicy
calc.clearOperations(); //czyszczę tablicę nadpisując ją
calc.printOperations(); //wyświetlam żeby sprawdzić efekt wyczyszczenia
