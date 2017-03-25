/*#### Zadanie 1
Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
1. Wypisz pierwszy owoc w konsoli.
2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).*/
var fruits = ["apple", "cherry", "melon", "grapes"];

console.log (fruits[0]);

console.log (fruits[fruits.length-1]);

for (var i=0; i<=fruits.length-1; i++) {
    console.log (fruits[i]);
}


/*
#### Zadanie 3
Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr &ndash; tablicę. Następnie przy pomocy pętli **for** przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.*/

function printTable (table) {
    for (var i=0; i<table.length; i++) {
        console.log (table[i]);
    }
}
printTable([5, 7, 9]);

/*
#### Zadanie 4
Napisz dwie funkcje ```add(array)``` i ```multiply(array)```. Obie mają przyjmować tylko jeden argument &ndash; tablicę. Następnie funkcja ```add``` ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli **for**), a funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli **for**).
*/

function add(array) {
    var resultAdd = 0;
    for (j=0;j<=array.length-1; j++) {
        resultAdd = resultAdd + array[j];
    } 
    return resultAdd;
}

function multiply(array) {
    var resultMulti = 1;
    for (j=0;j<=array.length-1; j++) {
        resultMulti = resultMulti * array[j];
    } 
    return resultMulti;
}
console.log(add([4, 5, 1]));
console.log(multiply([2, 3, 4]));

/*
#### Zadanie 5
Napisz funkcję ```getAvarage```, która ma przyjmować tylko jeden argument &ndash; tablicę. Funkcja ta ma zwracać średnią wartość liczb w tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.
*/

function getAverage (array) {
    var sum = 0;
    var avg;
    for (i = 0; i<array.length; i++) {
        sum = sum + array[i];       
    }
    avg = sum/array.length;
    return avg;
}
console.log (getAverage([3, 4, 5]));

/*
#### Zadanie 6
Napisz funkcję ```distFromAvarage```, która ma przyjmować tylko jeden argument &ndash; tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki a średnią wartością tablicy. Dla uproszczenia możesz użyć funkcji z poprzedniego zadania.
Np.

```JavaScript
distFromAvarage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAvarage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAvarage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```*/

function distFromAverage (array) {
    var sum = 0;
    var avg;
    var result = [];
    for (i = 0; i<array.length; i++) {
        sum = sum + array[i];       
    }
    avg = sum/array.length;
    for (j=0; j<array.length; j++) {
        result[j] = Math.abs(array[j] - avg);
    }
    return result;
}
  
console.log (distFromAverage ([1,2,3,4,5,6,7])); 

/*
#### Zadanie 7
Napisz funkcję ```factors```, która ma przyjmować tylko jeden argument &ndash; liczbę, która musi być większa od **0**. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.

```JavaScript
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []

*/
function factors (number) {
    var array = [];
    if (number>0) {
        for (var i=number; i>0; i--) {
            if (number%i==0) {
                array.push(i);
            }
        }
    }
    return array;
}
console.log(factors(4));

/*
#### Zadanie 8
Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
```*/

function getMissingElement (array) {
    var error;
    for (var i=0;i<array.length-1; i++) {
        if (array[i+1] - array[i] !== 1) {
            error = array[i] + 1;
            return error;
        } 
        else {
            return null;
        }
    }
      
}
console.log(getMissingElement ([1, 3, 4]));
/*
#### Zadanie 9
Napisz funkcję ```sortArray```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą  liczby całkowite. Funkcja ta ma zwracać posortowaną rosnąco tablicę. Skorzystaj z metod tablicowych.
```JavaScript
sortArray([145,11,3,64,4,6,10]) => [3,4,6,10,11,64,145]
```*/

function sortArray (array) {
     var sorted = array.sort(function(a, b) {
                        return a-b;    
    });
    return sorted;
}
console.log (sortArray([145,11,3,64,4,6,10]));
/*
#### Zadanie 10
Napisz funkcję ```addArrays```, która ma przyjmować dwa argumenty &ndash; dwie tablice  zawierające  liczby całkowite. Funkcja ta ma zwracać również tablicę, która będzie wynikiem dodawania każdego elementu o tym samym indeksie. Jeżeli, tablice nie są równe, elementy nadmiarowe są przepisywane do nowej tablicy.
```JavaScript
addArrays([4,0,1,3,4], [1,9,6,7,8,17]) => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]) => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]) => [5,4,77,6,3,5]*/

function addArrays (array, tab) {
    var sum = [];
    if (array.length == tab.length) {
        for (var i=0; i<array.length; i++) {
            sum.push(tab[i] + array[i]);   
        }
    }   
    else if (array.length < tab.length) {
        for (var i=0; i<array.length; i++) {
            sum.push(tab[i] + array[i]); 
        }
        for (j=array.length; j<tab.length; j++) {
            sum.push(tab[j]);
        }
    
    }
    else if (array.length > tab.length) {
        for (var i=0; i<tab.length; i++) {
            sum.push(tab[i] + array[i]); 
        }
        for (j=tab.length; j<array.length; j++) {
            sum.push(array[j]);
        }
    
    }
    return sum;
}
console.log (addArrays ([2,1,5,8], [2,1,3]));   
