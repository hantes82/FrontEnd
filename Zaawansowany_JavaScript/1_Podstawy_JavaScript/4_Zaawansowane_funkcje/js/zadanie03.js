/**
 * Created by Agata on 21.01.2016.
 */
/*#### Zadanie 3
Napisz funkcję, która jako parametry przyjmuje liczby i wyświetla największą z nich. Skorzystaj ze zmiennej ```arguments```.

Przykład:
```JavaScript
input -> 5, 29, 6, 4, 34, 56, 2, 3
output -> 56
```*/
function order () {
    var array = [];
    for (var i=0; i<arguments.length; i++) {
        array[i] = arguments[i];
        }
    array.sort(function (a,b) {
        return a-b;
    });
console.log(array[array.length-1]);
      
  
}
order (5, 29, 6, 4, 34, 56, 2, 3);



/*#### Zadanie 4
Napisz funckję, która jako parametr przyjmie liczbę całkowitą od 1-10. W funkcji uruchom funkcję setInterval. Niech jego
zadaniem będzie wypisywanie na konsoli tekstu "Hello" oraz licznika, zliczającego, który raz już został uruchomiony setInterval.
Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty setInterval.*/

function exInt(number) {
    var counter=0;
    if ((number<1) || (number>10)) {
        return console.log("Nieprawidłowa liczba");
    }
    else {
        number = Math.round(number);
       
         var id = setInterval(function()  {  
            console.log('jestem wywolywana co 2 sekundy');
             counter++;
             if (counter == number) {
                 clearInterval(id);
             }
         }, 2000)
           
    }
}
//exInt (9);

/*#### Zadanie 5
Stwórz funkcję, która będzie wypisywała w konsoli tekst "Cześć". Przetestuj miejsce wywoływania tej funkcji.
Najpierw wywołaj ją po definicji funkcji, a póżniej przed. W komentarzu zapisz swoje spostrzeżenia.
Następnie stwórz drugą funkcję, która będzie wypisywała w konsoli inny tekst np. "Witaj". Stwórz ją jako
wyrażenie funkcyjne (czyli przypisz definicję do zmiennej). Następnie spróbuj przetestować w podobny sposób
jak pierwszą funkcję, miejsce jej wywołania. W komentarzu zapisz swoje spostrzeżenia.*/

textPrint();
function textPrint() {
    console.log ("Cześć");                      //W przypadku definicji funkcji oba wywołania działają
}
textPrint();

printText();
var printText = function () {
    console.log ("Cześć Hello");                //W przypadku wyrażenia funkcyjnego zadziała tylko wywołanie, które znajduje się po definicji wyrażenia funkcyjnego. W tym przypadku trzeba                                                 pilnować miejsca wywołania wyrażenia
}
printText();