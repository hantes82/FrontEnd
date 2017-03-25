//Zadanie 1
//W pliku script.js stwórz dwie zmienne i przypisz do nich dwie wartości logiczne, jakie znasz. Porównaj je w konsoli za pomocą operatora ```==```.
//Napisz w komentarzu swoje spostrzeżenia.

var firstVar = true;
var secVar = false;
console.log(firstVar === secVar);

//Zadanie 2
//W pliku script.js stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a trzecia o nazwie ```resultModulo``` niech przechowuje liczbę 0. Oblicz resztę z dzielenia (modulo) tych liczb i zapisz wynik w zmiennej   //```resultModulo```.
//Wypisz zmienną ```resultModulo``` w konsoli. Pamiętaj, że słówka ```var``` używamy tylko podczas tworzenia zmiennej.

var modVar1 = 30;
var modVar2 = 24;
var resultModulo = 0;
resultModulo = modVar1 % modVar2;
console.log(resultModulo);

//Zadanie 3
//W pliku script.js stwórz trzy zmienne. Dwie niech przechowują dowolne stringi, a jedna o nazwie ```joinedStrings```, niech przechowuje pusty string np. ```var joinedStrings = ""```
//Połącz stringi za pomocą konkatenacji (+) i zapisz wynik w zmiennej ```joinedStrings``` oraz wypisz go w konsoli.

var strVar1 = "Litwo! Ojczyzno moja,";
var strVar2 = "\nTy jesteś jak zdrowie";
var joinedStrings = strVar1 + strVar2;
console.log(joinedStrings);

//Zadanie 4
//W pliku script.js swtórz dwie zmienne:

//``` JavaScript
//var myNumber = 4;
//var myString = "4";
//Porównaj te zmienne za pomocą operatorów ```==``` oraz ```===```.
//Wypisz wyniki w konsoli. Zapisz spostrzeżenia w komentarzu.

var myNumber = 4;
var myString = "4";

console.log(myNumber == myString);
console.log(myNumber === myString);

//Porównanie przy użyciu dwóch znaków równości porównuje tylko wartości, natomiast porównanie przy użyciu trzech znaków równości sprawdza też typ więc:

//console.log(myNumber == myString); - true

//console.log(myNumber === myString); - false

/*Zadanie 5

W pliku script.js swtórz zmienną o nazwie ```counter```. Wstaw do niej liczbę 145.
Wypisz jej wartość w konsoli, a następnie:

* za pomocą inkrementacji zwiększ wartość zmiennej ```counter```
* wypisz ją w konsoli
* za pomocą dekrementacji zmniejsz wartość zmiennej ```counter```
* wypisz ją w konsoli. */

var counter = 145;
console.log(counter);
counter++;
console.log(counter);
counter--;
console.log(counter);

/*Zadanie 6
W pliku script.js stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie ```result```, niech przechowuje ```null```. Sprawdź czy liczba pierwsza jest większa od drugiej za pomocą odpowiedniego operatora i zapisz wynik w zmiennej ```result```. Wypisz tą zmienną w konsoli. */

var firstNum = 32;
var secondNum = 21;
var result = null;
result = firstNum > secondNum;
console.log(result);

