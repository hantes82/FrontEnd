/*
Zadanie 10
Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty:
* kwotę do zapłaty,
* opis słowny obsługi.
Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany &ndash; funkcja powinna zwracać napis "Opis nieczytelny".

Opis może przyjmować następujące wartości:
"Bardzo dobra obsluga" => 25% napiwku,
"Dobra obsluga" => 20% napiwku,
"Srednia obsluga" =>15% napiwku,
"Zla obsluga" => 0% napiwku.

Przykład:
```JavaScrit
input -> 100, "Bardzo dobra obsluga"
output -> 25
*/


function calculateTip (amount, raiting) {
    var tip;
    switch (raiting) {
        case ("Bardzo dobra obsluga"):
            tip = amount * 0.25;
            break;
        case ("Dobra obsluga"):
            tip = amount * 0.2;
        break;
        case ("Srednia obsluga"):
            tip = amount * 0.15;
        break;
        case ("Zla obsluga"):
            tip = 0;
        break;
        default:
            tip = "Opis nieczytelny";            
    }
    return tip;
}
console.log ("Napiwek wynosi: " + calculateTip (100, "Dobra obsluga"));

