/*
Zadanie 2;
Napisz funkcję przyjmującą dwie liczby jako argumenty: **a** i **n**. Funkcja zwraca   wynik **a** do potęgi **n**.
Użyj pętli a nie ```Math.pow()
*/

function power (n, x) {
    for (i=1; i<x;i++) {
        n = n*n;
    }
    return n;

}
console.log (power(2,2));