//Zadanie 1
//W pliku script.js stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```, wypisz w konsoli, która z nich jest większa.

var numbOne = 17;
var numbTwo = 20;
if (numbOne > numbTwo) {
    
    console.log("Liczba: " + numbOne + " jest większa od liczby: " + numbTwo);
}
else {
        console.log("Liczba: " + numbTwo +" jest większa od liczby: " + numbOne);
}

//Zadanie 2
//W pliku script.js stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
//(możesz wykorzystać operator logiczny ```&&```, spróbuj sam poszukać o nim informacji), wypisz w konsoli, która z nich jest największa.

var numberOne = 20;
var numberTwo = 71;
var numberThree = 30;
 
if (numberOne > numberTwo && numberOne > numberThree) {
        console.log ("Liczba: " + numberOne + " jest większa od liczby: " + numberTwo + " i liczby " + numberThree);
}
    else if (numberTwo > numberOne && numberTwo > numberThree) {
        console.log ("Liczba: " + numberTwo + " jest większa od liczby: " + numberOne + " i liczby " + numberThree);
    }
    else {
        console.log ("Liczba: " + numberThree + " jest większa od liczby: " + numberOne + " i liczby " + numberTwo);
    }

//Zadanie 3
//W pliku script.js stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".

for (var i=0; i<10; i++) {
    console.log ("Lubię JavaScript");
}

//Zadanie 4
//W pliku script.js stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.

var result = 0;
for (var z=0; z<=10;z++) {
    result = result + z;
}
console.log(result);

/*Zadanie 5
W pliku script.js napisz program, który na podstawie wartości zmiennej np. ```var n = 5;``` wypisuje wszystkie liczby od zera do **n**.
Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

```JavaScript
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
```

*Podpowiedź: Jak sprawdzić czy liczba jest parzysta lub nieparzysta? Wystarczy podzielić ją modulo przez 2, jeżeli wynik to 0, wtedy liczba jest parzysta, w przeciwnym przypadku jest nieparzysta. */
var m = 0;
var n = 5;

while (m <= n) {
    console.log (m);
    if(m % 2 == 0) {
        console.log ("Liczba: " + m + " jest parzysta");
    }
    else {
        console.log ("Liczba: " + m + " jest nieparzysta");
    }
    m++;  
}

//Zadanie 6
//W pliku script.js stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:
//konkatenację np.```console.log("i= " + i + ", j= " + j);```

    for (var d=0; d<10; d++) {
        for(var j=10; j>0; j--){
            console.log ("Dla tego przebiegu wartość okrążenia pętli i jest równa: " + d + " natomiast wartość okrążenia pętli j jest równa: " + j);
        }
        
    }
   

// Zadanie 7


/* Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.


//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}
*/

/*Zadanie 8
W pliku script.js napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```). Użyj do tego  pętli zagnieżdżonych.

```
*
* *
* * *
* * * *
* * * * *
```

Możesz to zadanie rozwiązać na dwa sposoby:
1. używając pętli zależnych.
2. używając pętli niezależnych i instrukcji warunkowej **if**.
*/

var size = 5;
var stars = "*";
for (var g=0; g<size; g++) {
    console.log(stars);
    stars = stars + "*";
   
}
// Nie wykorzystałem dwóch pętli bo nie było takiej konieczności w przypadku tego zadania. Wykorzystałem jedną.

/*Zadanie 9 - dodatkowe

W pliku script.js napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```):

```
* 2 3 4 5
* * 3 4 5
* * * 4 5
* * * * 5
* * * * *
* * * * *
* * * * 5
* * * 4 5
* * 3 4 5
* 2 3 4 5 */

var nSize = 5;
var starVar = "";
var loop = "";
var array = [];
for (var k=0; k<nSize; k++) {
    starVar = loop;
    starVar = starVar + "*";
    loop = starVar; 
        for (l=k+2; l<=nSize; l++) {

            starVar = starVar + l;
            
        }
   console.log (starVar);
    array[k] = starVar;
}
for (u=nSize-1; u>=0; u--) {
    console.log (array [u]);
}