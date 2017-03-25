/*
Zadanie 5
Napisz funkcję, która przyjmuje jako argumenty trzy liczby i zwraca największą z nich (zwraca, a nie wypisuje na ekranie).Wypisać
możesz dopiero jak zwrócisz wynik z funkcji.
*/
var result = 0;
function biggestNum (number1, number2, number3) {
    if ((number1>number2) && (number1>number3)) {
        result = number1;
        }
    else if ((number2>number1) && (number2>number3)) {
        result = number2;
    }
    else {
        result = number3;
    }
    return result;
}

console.log (biggestNum (2,3,4));