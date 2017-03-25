/*
Zadanie 2

Stwórz tablicę z losowymi liczbami (10 liczb) z przedziału 1-60. Wylosuj liczby za pomocą Math.random(). Następnie sprawdź każdą liczbę w tablicy i zmodyfikuj tak, aby była parzysta. Przykład:

```JavaScript
Przykładowa tablica:  [4, 55, 17, 22, 1, 43, 53, 11, 9, 20];
Zmodyfikowana tablica: [4, 56, 18, 22, 2, 44, 54, 12, 10, 20];
*/

var tab = [];
var number = 0;
for (var i=0; i<10; i++)
    number = Math.floor(Math.random()*100);
    if ((number>=1) && (number<=60)) {
        tab[i] = number;
        
    }
    

for (var j=0; j<10; j++) {
    if (tab[i]%2 == 0) {
        console.log ('Liczba parzysta');
    }
    else {
        tab[i]=tab[i]+1;
    }
}
for (var n=0; n<=tab.length; n++) {
    console.log ('Element nr: ' +tab[n]);
}