/*
Zadanie 9
Napisz funkcję ```rockPaperScissors(player1, player2)```, która będzie pobierać dwa napisy i na ich podstawie zwracać informacje, kto wygrał. Poprawne napisy przyjmowane przez funkcję to: papier, nozyce, kamien.

Funkcja ma zwracać jeden z czterech napisów:
* "Gracz 1 wygrał",
* "Gracz 2 wygrał",
* "Remis",
* "Błędne informacje".

Przykład:
```JavaScrit
input -> "papier", "nozyce"
output -> "Gracz 2 wygrał"
*/


function rockPaperScissors(player1, player2) {
    var paper = "papier";
    var rock = "kamien";
    var scissors = "nozyce";
    if (((player1 == paper) && (player2 == rock)) || ((player1 == scissors) && (player2 == paper)) || ((player1 == rock) && (player2 == scissors))) {
            console.log ('Gracz 1 wygrał');
            }
    else if (((player1 == rock) && (player2 == paper)) || ((player1 == paper) && (player2 == scissors)) || ((player1 == scissors) && (player2 == rock))) {
             console.log ('Gracz 2 wygrał');
             }
    else if (((player1 == rock) && (player2 == rock)) || ((player1 == paper) && (player2 == paper)) || ((player1 == scissors) && (player2 == scissors))) {
            console.log ('Remis');
    } 
    else {
            console.log ('Błędne informacje');
    }
}
rockPaperScissors ('kamien', 'papier');