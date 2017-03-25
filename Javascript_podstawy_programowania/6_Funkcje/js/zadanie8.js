/*
Zadanie 8
Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
* wynajem trwa jeden dzień, koszt pokoju 200 zł/dzień,
* wynajem trwa od dwóch do trzech dni, koszt pokoju 180 zł/dzień,
* wynajem trwa od czterech do siedmiu dni, koszt pokoju 160 zł/dzień,
* wynajem trwa osiem lub więcej dni, koszt pokoju 150 zł/dzień.

Dodatkowo za każdy pełny tydzień przysługuje 50 zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:

```JavaScript
var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest metodą, która zaokrągla liczbę w dół.
```

Przykład:
```JavaScript
input -> 8
output -> 1150
*/

function rentCost(days) {
    var bookingCost = 0;
    var numbersOfWeeks = Math.floor(days / 7);
    if (days == 1) {
        bookingCost = bookingCost + 200;
    }
    else if ((days>=2) && (days <=3)) {
         bookingCost = bookingCost + days*180;
    }
    else if ((days>=4) && (days <=7)) {
         bookingCost = bookingCost + days*160;
        if (days == 7) {
            bookingCost = bookingCost - 50;
        }
    }
    else {
        bookingCost = bookingCost + days*150 - numbersOfWeeks*50;
        
    }
    return bookingCost;
}
console.log (rentCost(7));