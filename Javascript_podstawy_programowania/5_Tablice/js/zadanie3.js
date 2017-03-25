/*
Zadanie 3

Na podstawie dwóch  tablic, wypisz w konsoli elementy, które się powtarzają w obu tablicach.
Załóż, że porównywane tablice są równe.
JavaScript
 var arr1 = [4, 55, 17, 22, 1];
var  arr2 = [4, 53, 11, 22, 20];

Wynik w consoli: 4,22;
*/

var arr1 = [4, 55, 17, 22, 1];
var  arr2 = [4, 53, 11, 22, 20];

for (var i=0; i<=arr1.length-1; i++) {
    for (var j=0; j<=arr2.length-1; j++)
        if (arr1[i] == arr2[j]) {
            console.log (arr1[i]);
        }
}





    