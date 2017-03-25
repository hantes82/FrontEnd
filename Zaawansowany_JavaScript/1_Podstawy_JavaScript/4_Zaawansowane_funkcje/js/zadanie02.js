/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Funkcja sortująca zadeklarowaną tablicę liczb naturalnych
function sortArray() {

    //Definicja tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //funkcja sortująca sort() z funkcją anonimową naprawiającą problem z sortowaniem w porządku leksykograficznym
    points.sort(function(a, b){
        //zwracanie różnicy co sprawdza rzeczywisty porządek w połączeniu z funkcją sort()
        return a-b;
    });

    //zwrócenie tablicy
    return points;
}

//Wywołanie funkcji sortArray()
sortArray();