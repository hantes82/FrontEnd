/*
Zadanie 2

Napisz pętlę **for** iterującą od **0** do **15**. W każdej iteracji sprawdź, czy bieżąca liczba jest parzysta czy nieparzysta, i wyświetl informację w konsoli.
*/

var min = 0;
var max = 15;

for (var i=min; i<=max; i++) {
    if (i%2 == 0) {
        console.log ("Liczba: " +i+ " jest parzysta.");
    }
    else {
        console.log ("Liczba: " +i+ " jest nieparzysta.");
    }    
}