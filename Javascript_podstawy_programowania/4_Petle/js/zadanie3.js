/*
Zadanie 3
Napisz program liczący sumę wszystkich liczb w podanym przedziale od **x** do **y**.
Użyj do tego obu znanych Ci pętli.
Np. dla ```x = 5```, ```y = 10``` suma to ```5+6+7+8+9+10=45```.
*/

var x = 5;
var y = 10;
var sum = 0;
for (var i=x; i<=y; i++) {
    sum = sum + i;
}
console.log ('Suma liczb z przedziału: ' +x+ ' - ' +y+ ' jest równa: ' +sum);