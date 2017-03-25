/*
Zadanie 5
Napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```):

```  
  *   *
*   *   *
  *   *  
*   *   *
  *   *   
```
Użyj do tego pętli zagnieżdżonych, a w wewnętrznej pętli dodaj **if** sprawdzający odpowiedni warunek (jeżeli ```i + j``` jest nieparzyste, to ma być gwiazdka).
*/
var line ="";
var size = 5;
for (var i=0; i<size; i++) {
    line = " " //resetuję zmienna line jako, że zaczynam tworzenie nowej linii
    for (var j = 0; j<size; j++) {
        if ((i+j) % 2 !==0) {
            
            line = line + "*";  // do zmiennej line dodaje gwiazdkę, jeśli i+j jest podzielne przez 2
            
        }
        else {
            line = line + " ";  // do zmiennej line dodaje spację, jeśli i+j nie jest podzielne przez 2
        }
        
    }
    console.log(line);
}