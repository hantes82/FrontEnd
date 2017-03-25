/*
Zadanie Z3
Liczba doskonała to taka liczba, która jest sumą wszystkich swoich dzielników. Jest to np. 6:
```JavaScript
6 = 3 + 2 + 1
Liczba niekompletna to taka liczba, która jest większa od sumy wszystkich swoich dzielników. Jest to np. 10:
```JavaScript
1+2+5=8 < 10
```

Napisz program, który wypisze wszystkie liczby do wcześniej zdefiniowanej liczby ```x```. Określi przy tym, czy jest to liczba doskonała, niekompletna czy żadna z nich.
*/


function perfectNumber (num) {
    var sum = 0;
    var info = "";
    for (var i=1; i<num; i++) {
        console.log (i);
        if (num%i == 0)  {
            sum = sum +i;  
        }
        if (sum == num) {
            info = ' jest liczbą doskonałą';
            }
        else if (sum < num) {
            info = ' jest liczbą niekompletną';
        }
        else {
            info = ' nie jest liczbą doskonałą ani niekompletną';
        }
    }
console.log (num + info);   

}



console.log (perfectNumber (100));