#  Funkcje &ndash; zadania

#### Zadanie 1 &ndash; rozwiązywane z wykładowcą
Napisz funkcję o nazwie ```FooBar``` przyjmującą jedną zmienną. Funkcja ta ma wypisywać kolejne liczby, ale:
* w miejsce liczb podzielnych przez 3 wypisywać ```Foo```,
* w miejsce liczb podzielnych przez 5 wypisywać ```Bar```,
* w miejsce liczb podzielnych przez 3 i 5 wypisywać ```FOOBAR```.

Na przykład dla parametru ```x = 15``` wynik ma być następujący:
```  
12Foo4BarFoo78FooBar11Foo1314FOOBAR
 ```

#### Zadanie 2 &ndash; rozwiązywane z wykładowcą
Napisz funkcję przyjmującą dwie liczby jako argumenty: **a** i **n**. Funkcja zwraca   wynik **a** do potęgi **n**.
Użyj pętli a nie ```Math.pow()```

-------------------------------------------------------------------------------.

## Zadanie 3
Napisz funkcję miksującą o nazwie ```miksowanie```, która jako argument będzie przyjmowała napis.
Zadaniem funkcji jest zwrócenie tego napisu, ale poprzedzonego słowem ```zmiksowana ```. Funkcja ma zwracać nowo powstały napis (poprzez ```return```).
Następnie wypisz w konsoli to, co zwróciła funkcja.

Przykład:
```
input -> "marchewka"
output -> "zmiksowana marchewka"
```


#### Zadanie 4
Napisz funkcję, która przyjmuje jako argument liczbę **n** i wyświetla **n** razy na stronie napis "Programowanie jest fajne!".

#### Zadanie 5
Napisz funkcję, która przyjmuje jako argumenty trzy liczby i zwraca największą z nich (zwraca, a nie wypisuje na ekranie).Wypisać
możesz dopiero jak zwrócisz wynik z funkcji.

#### Zadanie 6
Stwórz funkcję, która będzie zwracała (poprzez ```return```) sumę liczb z tablicy. Tablica powinna być przekazana do funkcji jako argument.

Przykład:
```JavaScript
input -> [1,2,3]
output -> 6
```

#### Zadanie 7

Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie dziesięć razy: "Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".

#### Zadanie 8
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
```

#### Zadanie 9
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
```

#### Zadanie 10
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
```


## Praca domowa
Dokończ i powtórz wszystkie zadania, które zrobiłeś na zajęciach.


## Zadania dla chętnych
Poniżej znajdują się dodatkowe, trochę trudniejsze zadania. Zachęcam, abyś przynajmniej zastanowił się nad ich rozwiązaniem.

#### Zadanie Z1
Napisz funkcję sprawdzającą, czy podana liczba jest liczbą pierwszą (czyli podzielną przez jeden i samą siebie). Funkcja ma zwracać wartość ```true``` albo ```false (boolean)```.
Zastosuj algorytm **brute force**. Jest to najprostsza &ndash; a zarazem najbardziej czasochłonna metoda &ndash; wyznaczania liczb pierwszych. Działanie algorytmu opiera się na sprawdzeniu wszystkich potencjalnych dzielników danej liczby &ndash; jeżeli dana liczba nie dzieli się przez żadną inną liczbę (oprócz jeden i samej siebie), to jest ona oznaczana jako pierwsza.
W celu optymalizacji algorytmu sprawdza się wszystkie potencjalne dzielniki nie większe niż pierwiastek z samej sprawdzanej liczby.  Większe wartości nie mogą być już dzielnikami.
W celu otrzymania reszty z dzielenia użyj operatora **%** (modulo), np.

```JavaScript
12 % 5 = 2
```

#### Zadanie Z2
Napisz program, który zwraca wartość liczby **Pi**. Użyj następującej formuły:
```JavaScript
pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)
```
Zobacz, jak zmienia się precyzja wyniku w zależności od liczby iteracji pętli.

#### Zadanie Z3
Liczba doskonała to taka liczba, która jest sumą wszystkich swoich dzielników. Jest to np. 6:
```JavaScript
6 = 3 + 2 + 1
```

Liczba niekompletna to taka liczba, która jest większa od sumy wszystkich swoich dzielników. Jest to np. 10:
```JavaScript
1+2+5=8 < 10
```

Napisz program, który wypisze wszystkie liczby do wcześniej zdefiniowanej liczby ```x```. Określi przy tym, czy jest to liczba doskonała, niekompletna czy żadna z nich.


#### Zadanie Z4
Napisz funkcję ```mySin(x, iterNum)``` i ```myCos(x, iterNum)```, która zwraca aproksymacje funkcji ```sinus``` i ```cosinus```, użyj następujących wzorów:
```JavaScript
sin(x) = (x^1)/1! - (x^3)/3! + (x^5)/5! - (x^7)/7! + (x^9)/9! - (x^11)/11! + ...
cos(x) = (x^0)/0! - (x^2)/2! + (x^4)/4! - (x^6)/6! + (x^8)/8! - (x^10)/10! + ...
```
Pamiętaj, że ```0! = 1```.
Najpierw napisz funkcję do wyliczania silni, potem do wyliczania potęgi, a na koniec połącz je w całość.
