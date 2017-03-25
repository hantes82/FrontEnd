// w plikach index.html dodałem kodowanie UTF-8, bo js wywala problemy z kodowaniem znaków przy braku tego elementu.


// Zadanie 1
// W pliku script.js stwórz 6 zmiennych. Wstaw do nich następujące dane:

var num = 23;
console.log(num);
console.log(typeof num);
//Ta zmienna jest typu number i przechowuje wartość 23

var string1 = "Ala ma kota";
console.log(string1);
console.log(typeof string1);
//Ta zmienna jest typu string i przechowuje wartość-napis: "Ala ma kota"

var numStr = 11 + " Ala";
console.log (numStr);
console.log(typeof numStr);
//Ta zmienna jest typu string i przechowuje wartość "11 Ala"

var bool = true;
console.log (bool);
console.log(typeof bool);
//Ta zmienna jest typu boolean i przechowuje wartość true

var crit = undefined;
console.log (crit);
console.log(typeof crit);
//Ta zmienna jest typu undefined i jest niezdefiniowana

// Zadanie 2
//W pliku script.js stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie ```result```, niech przechowuje liczbę 0.
//Zapisz sumę tych liczb w zmiennej ```result``` i wypisz wynik w konsoli.

var firstNumber = 35;
var secondNumber = 13;
var result = 0
result = firstNumber + secondNumber;
console.log(result);

// Zadanie 3
//W pliku script.js stwórz zmienną i nic do niej nie przypisuj. Następnie wypisz ją w konsoli. Napisz w komentarzu jaka wartość została wypisana w konsoli.

var newVar;
console.log(newVar);

// W konsoli została wypisana wartość - undefined, jako, że jest to zmienna nie zdefiniowana.