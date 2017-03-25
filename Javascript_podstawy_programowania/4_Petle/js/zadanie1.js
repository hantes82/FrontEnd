/*Zadanie 1 &ndash; rozwiązywane z wykładowcą

Napisz program liczący wartość **x!**, gdzie **!** oznacza silnię, a **x** jest zmienną.
Użyj do tego obu znanych Ci pętli.
Silnia to wynik mnożenia wszystkich liczb całkowitych od jeden do podanej liczby */

/*
var x = 5
var silnia = 1
for (i=1; i<=x; i++)
    {
        silnia = silnia*i;
    } 
*/
var i = 1;
var silnia = 1;
while (i<=5) {
    silnia = silnia*i;
    console.log (silnia);
    i++;
}