/*
 Zadanie Z2
Napisz program, który zwraca wartość liczby **Pi**. Użyj następującej formuły:
```JavaScript
pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)
```
Zobacz, jak zmienia się precyzja wyniku w zależności od liczby iteracji pętli.
*/


//żeby było trudniej zrobiłem to zadanie tak, aby argument przekazywany do funkcji był ilością cyfr po przecinku


function pi(iteration) {
    var result = 0;
    var piCount;
    for (var i=1; i<=10000+iteration; i=i+4) {  //wywołanie ma sens dla większych iteracji np. 10000 dlatego upewniam się, że nie jest mniej przejść pętli niż 10000
        result = result + (1/i - 1/(i+2));
   } 
    piCount = 4 * result;
    var textConv = "";
    textConv = piCount.toString();
    textConv = textConv.slice(0,(iteration+2));
    return textConv;
}

console.log (pi(10));        