//Zadanie 1
//W pliku script.js swórz tablicę z trzema elementami np. z liczbami. Następnie
//wypisz w konsoli po kolei elementy tej tablicy.

var numArray = [34, 45, 78];

for (var i=0; i<=2; i++) {
    console.log (numArray[i]);
}

// Zadanie 2

/*W pliku script.js stwórz tablicę z listą swoich ulubionych owoców. Następnie:

1. Wypisz pierwszy owoc w konsoli.
2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).*/

var tabArray = ["Jabłko", "Banan", "Kiwi"];
console.log (tabArray[tabArray.length-1]);

for (n=0; n<tabArray.length; n++) {
    console.log (tabArray[n]);
}

//Zadanie 3
//W pliku script.js stwórz tablicę z 10 dowolnymi liczbami oraz zmienną  ```sum``` i przypisz do niej liczbę 0. Za pomocą pętli ```for``` wypisz sumę wszystkich elementów tablicy.

var tableSum = [13, 45, 21, 55, 32, 90, 76, 41, 67, 100];
var sum = 0;
for (var z=0; z<tableSum.length; z++) {
    sum = sum + tableSum[z];
}
console.log ("Suma wszystkich elementów tablicy: " + sum);

//Zadanie 4
//W pliku script.js stwórz tablicę z 10 dowolnymi liczbami . W pętli ```for``` sprawdź, które są parzyste.
//Wypisz w konsoli sumę wszystkich parzystych liczb.

var check = 0;
var tabMod = [13, 45, 21, 55, 32, 90, 76, 41, 67, 100];
    for (var j=0; j<tabMod.length; j++) {
        if (tabMod[j]%2 == 0) {
            console.log (tabMod[j] + " to element parzysty więc zostanie zsumowany.");
            check = check + tabMod[j];
        }
        else {
            console.log (tabMod[j] + " to element nieparzysty.");
        }
    }
console.log ("Suma elementów parzystych wynosi: " + check);


//Zadanie 5
//W pliku script.js stwórz tablicę z 10 dowolnymi liczbami oraz zmienną  ```max``` i przypisz do niej 0. W pętli ```for``` znajdź liczbę, która jest największa, przypisz ją do zmiennej //```max``` i wypisz w konsoli.

var tabMax = [13, 45, 21, 55, 32, 90, 76, 41, 67, 100];
var max = 0;
for (var a=0; a<tabMax.length; a++) {
    if (tabMax[a]>max) {
        console.log ("Element: " + tabMax[a] + " jest większy niż poprzedni więc zamieniam go z elementem: " + max);
        max = tabMax[a];
        
    }
    else {
        console.log ("Element: " + tabMax[a] + " jest mniejszy niż poprzedni.");
    }
}
console.log ("Maximum z elementów tabeli to: " + max);
    
/*Zadanie 6

W pliku script.js stwórz tablicę z 10 dowolnymi liczbami (niech kilka będzie takich samych) oraz zmienną ```firstIndex```. W pętli ```for``` sprawdź, która z liczb powatarza się jako pierwsza, przypisz ją do zmiennej ```firstIndex``` i wypisz w konsoli jej indeks.

Przykładowa tablica:

```JavaScript
 var arrWithNumbers = [2,4,5,2,3,5,1,2,4];
 ```

W tej tablicy jako pierwsza powtarza się liczba 2, więc zmienna ```firstIndex``` powinna mieć wartość 0, ponieważ jest to pierwsza liczba w tablicy, która ma gdzieś swojego sobowtóra.
Przetestuj Twój skrypt z różnymi wartościami w tablicy.
Podpowiedź: pamiętaj o odpowiednim przerwaniu pętli. */

var arrNum = [12,9,7,4,3,8,21,7,4];
var firstIndex;
for (var x=0; x<arrNum.length; x++) {
    console.log ("Sprawdzam element: " + arrNum[x]);
    for (var k=x+1; k<arrNum.length; k++) {
        if (arrNum[x] === arrNum[k]) {
            firstIndex = x;
            console.log ("Pierwszy powtarzający się index to: " + x); 
           break;
        } 
        else{
            continue;
        }
    }
    if (firstIndex == x) {
            break;
        }
    else {
        continue;
    }     
} 

//Zadanie 7
//W pliku script.js stwórz tablicę z 10 dowolnymi liczbami. Wypisz ją od tyłu używając pętli ```for```.

var arrayN = [12,9,7,4,3,8,21,7,4];
for (var p=arrayN.length-1; p>=0; p--) {
    console.log (arrayN[p]);
}

