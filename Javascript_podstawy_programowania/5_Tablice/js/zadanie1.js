/*Zadanie 1
Stwórz tablicę z dowolnymi liczbami. Następnie oblicz średnią arytmetyczną z liczb znajdujących się w tej tablicy i wypisz ją w konsoli.
*/

var tab = [5,9,21,51,75];
var sum = 0;
var srednia = 0; ;
for (var i=0; i<=tab.length-1; i++) {
    sum = sum+tab[i];
    
}
srednia=sum/tab.length;
console.log (srednia);
