/*
Zadanie Z1
Napisz funkcję sprawdzającą, czy podana liczba jest liczbą pierwszą (czyli podzielną przez jeden i samą siebie). Funkcja ma zwracać wartość ```true``` albo ```false (boolean)```.
Zastosuj algorytm **brute force**. Jest to najprostsza &ndash; a zarazem najbardziej czasochłonna metoda &ndash; wyznaczania liczb pierwszych. Działanie algorytmu opiera się na sprawdzeniu wszystkich potencjalnych dzielników danej liczby &ndash; jeżeli dana liczba nie dzieli się przez żadną inną liczbę (oprócz jeden i samej siebie), to jest ona oznaczana jako pierwsza.
W celu optymalizacji algorytmu sprawdza się wszystkie potencjalne dzielniki nie większe niż pierwiastek z samej sprawdzanej liczby.  Większe wartości nie mogą być już dzielnikami.
W celu otrzymania reszty z dzielenia użyj operatora **%** (modulo), np.
Math.sqrt(n)
```JavaScript
12 % 5 = 2
*/


function bruteForce (n) {
    var number;
    var temp = Math.sqrt(n);                    // zmienna przechowujące pierwiastek
    var numToString = temp.toString();          //zamieniam na string 
    
    if (numToString.indexOf(".") < 0 ) {        // sprawdzam czy po obliczeniu pierwiastka danej liczby wynik zawiera kropkę, czyli jest niecałkowity. 
        
    for (var i=2; i<=(temp-1); i++)   // zaczynam odliczanie od 2, ponieważ mniejsze liczby nie są liczbami pierwszymi
        {
            if (n%i == 0) {
                number = false;      // jesli dzieli się bez reszty przez jakąś liczbę z przedziału pomiędzy 2 i sobą samą to nie jest pierwsza` 
                break;   
            }
            else {
                number = true;
            }
        }
}
    else {
       for (var i=2; i<=(n-1); i++)   // jeśli pierwiastek nie jest całkowity to robię pętlę do wysokości liczba - 1
        {
            if (n%i == 0) {
                number = false;      
                break;   
            }
            else {
                number = true;
            }
        }           
}
    return number;
}

console.log (bruteForce(16));