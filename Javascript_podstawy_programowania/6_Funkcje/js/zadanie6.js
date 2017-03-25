/*
Zadanie 6
Stwórz funkcję, która będzie zwracała (poprzez ```return```) sumę liczb z tablicy. Tablica powinna być przekazana do funkcji jako argument.

Przykład:
```JavaScript
input -> [1,2,3]
output -> 6
*/

function tableSum (tab) {
    var result = 0;
    for (var i=0; i<tab.length;i++) {
       result = result + tab [i];
        
    }
    return result;
}
console.log (tableSum([3,5,7,8]));