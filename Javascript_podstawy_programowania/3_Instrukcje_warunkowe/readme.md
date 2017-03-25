#  Instrukcje warunkowe&ndash; zadania

#### Zadanie 1 &ndash; rozwiązywane z wykładowcą

Napisz skrypt definiujący trzy liczby: **a**, **b** i **c**. Skrypt ma sprawdzić, czy podane liczby mogą być bokami trójkąta.
Tę figurę geometryczną można zbudować z trzech linii tylko wtedy, gdy suma długości dwóch z nich jest większa niż długość trzeciej linii, czyli:

```JavaScript
a + b > c
c + b > a
a + c > b
```

W celu wypisania czegoś w konsoli &ndash;  użyj funkcji ```console.log```, np:  

```JavaScript
console.log("Tekst, który pokaże się w konsoli");
```
-------------------------------------------------------------------------------
#### Zadanie 2
Stwórz zmienną, która będzie przetrzymywała stan pogody np.:
```JavaScript
var weather = "deszczowo";
```
Wykorzystaj poznaną instrukcję warunkową, aby wyświetlić informację w konsoli, czy powinieneś wziąć parasol, czy nie. Zmień wartość zmiennej ```weather``` i sprawdź, co zostanie wypisane.
Możliwe scenariusze:
* "deszczowo" - weź parasol
* "wietrznie" - weź czapkę
* "słonecznie" - weź okulary przeciwsłoneczne


#### Zadanie 3
W pliku **zadanie03.js** &ndash; jest przykładowa funkcja obliczająca proste równania. Niestety nie działa ona dobrze. Znajdź błąd i go napraw, tak żeby funkcja działała. Dopisz dodatkowe testy, żeby sprawdzić, czy wszystkie przypadki działają. Zadanie ma być rozwiązane w tym samym pliku.
