/*#### Zadanie 1
W pliku **app.js** masz tablicę o nazwie ```task1Array```. Następnie:
  1. Wypisz element znajdujący się w położeniu 3,2.
  2. Wypisz długość tablicy znajdującej się w drugim rzędzie.
  3. Wypisz element znajdujący się w położeniu 4,2.*/

var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];
console.log(task1Array[3][2]);
console.log (task1Array[1].length);
console.log(task1Array[4][2]);

/*
#### Zadanie 2
W pliku **app.js** masz tablicę o nazwie ```task2Array```. Następnie:
  1. W pętli wypisz zawartość pierwszego wymiaru naszej tablicy.
  2. W pętli wypisz długość tablic składających się na 2gi wymiar.
  3. W pętli wypisz wszystkie elementy tablicy 2 wymiarowej (musisz użyć do tego zagnieżdżonej pętli **for**).*/

var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
];
for (var i=0; i<task2Array[0].length; i++) {
    console.log(task2Array[0][i]);
}
for (var h=0; h<task2Array.length; h++) {
    for (var g=0; g<task2Array[h].length; g++) {
        console.log(task2Array[h][g]);
    }
}
/*
#### Zadanie 3
Napisz funkcje ```print2DArray```, która będzie przyjmować tablicę dwuwymiarową. Następnie funkcja ma wypisać w konsoli zawartość tej tablicy.
*/

function print2DArray (arrayEx) {
    for (var i=0; i<arrayEx.length; i++) {
         {
                console.log (arrayEx[i]);
            }
    }
}
print2DArray ([[4,3],[1,2]]);

/*
#### Zadanie 4
Stwórz ręcznie dwuwymiarową tablicę i przetestuj ją na rozwiązaniu z zadania 3.*/

var task3Array = [[7,9],[6,5]]
print2DArray (task3Array);

/*
#### Zadanie 5
Napisz funkcję ```create2DArray```, która przyjmuje dwie liczby całkowite ```rows``` i ```columns```. Zadaniem funkcji jest stworzenie i zwrócenie dwuwymiarowej tablicy o podanej liczbie rzędów i kolumn. Każda komórka ma być wypełniona kolejną liczbą całkowitą. Następnie użyj rozwiązania z zadania 3 do wypisania tej tablicy w konsoli.
Hint: Musisz użyć pętli zagnieżdżonych.*/


function create2Array (rows, columns) {
    var array = [];
    var arrayElement = 1;
    for (var i=0; i<rows; i++) {
        array.push([]);
        for (j=0; j<columns; j++) {
            array[i].push(arrayElement);

            arrayElement++;
        }
        
    }
   
    return array;
}
console.log (create2Array (3, 3));

/*
#### Zadanie 6
Napisz funkcję, która stworzy tablicę 2-wymiarową. Niech tablica wygląda w następujący sposób:
```JavaScript
[
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
];
 ```
Jest to tak zwana macierz jednostkowa. Musisz użyć pętli zagnieżdżonych*/

function createOneArray (rows, columns) {
    var array = [];
    for (var i=0; i<rows; i++) {
        array.push([]);
        for (j=0; j<columns; j++) {
            if (i==j) {
                array[i].push(1);
            }
            else {
                array[i].push(0);
            }
        
        }
    }
    return array;

}
 console.log (createOneArray (4,4));


