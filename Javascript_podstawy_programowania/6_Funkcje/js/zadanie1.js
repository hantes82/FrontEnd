/*
Zadanie 1;
Napisz funkcję o nazwie ```FooBar``` przyjmującą jedną zmienną. Funkcja ta ma wypisywać kolejne liczby, ale:
* w miejsce liczb podzielnych przez 3 wypisywać ```Foo```,
* w miejsce liczb podzielnych przez 5 wypisywać ```Bar```,
* w miejsce liczb podzielnych przez 3 i 5 wypisywać ```FOOBAR```.

Na przykład dla parametru ```x = 15``` wynik ma być następujący:
```  
12Foo4BarFoo78FooBar11Foo1314FOOBAR
*/

function FooBar (number) {
    var string = "";
    for (var i=1;i<=number;i++) {
        if ((i%3 == 0) && (i%5 == 0)) {
            string = string + "FOOBAR";
        }
            
        else if  (i%3 == 0) {
            string = string + "Foo";
        }
        else if (i%5 == 0) {
           string = string + "Bar";
        }
        
        else {
           string = string + i;
        }
    }
    return string;
}
console.log (FooBar(15));