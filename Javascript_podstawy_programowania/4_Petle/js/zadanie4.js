/*Zadanie 4
Napisz program, który na podstawie wartości zmiennej **n** wypisuje wszystkie liczby od zera do **n**.
Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie.
*/
var numberOne = 0;
var n = 15;

for (var i=numberOne; i<=n; i++) {
    if (i%2 == 0) {
        console.log ("Liczba: " +i+ " jest parzysta.");
    }
    else {
        console.log ("Liczba: " +i+ " jest nieparzysta.");
    }    
}