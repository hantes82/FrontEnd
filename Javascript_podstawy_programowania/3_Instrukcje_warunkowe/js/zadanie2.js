/*Zadanie 2
Stwórz zmienną, która będzie przetrzymywała stan pogody np.:
```JavaScript
var weather = "deszczowo";
```
Wykorzystaj poznaną instrukcję warunkową, aby wyświetlić informację w konsoli, czy powinieneś wziąć parasol, czy nie. Zmień wartość zmiennej ```weather``` i sprawdź, co zostanie wypisane.
Możliwe scenariusze:
* "deszczowo" - weź parasol
* "wietrznie" - weź czapkę
* "słonecznie" - weź okulary przeciwsłoneczne */


var weather = "słonecznie";

switch(weather) {
    case "deszczowo": {
        console.log("weź parasol");
        break;
    }
    case "wietrznie": {
        console.log("weź czapkę");
        break;
    }
    case "słonecznie": {
        console.log("weź okulary przeciwsłoneczne");
        break;
    }
    default: {
        console.log("Błędny wpis");
    }
}