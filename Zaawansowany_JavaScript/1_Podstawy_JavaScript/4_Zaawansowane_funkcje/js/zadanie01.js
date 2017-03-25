/**
 * Zagnieżdżanie funkcji.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */


//Deklaracja i definicja funkcji jeden()
function jeden() {

    //Definicja zmiennej liczbowej zmienna1 - lokalnej dla funkcji jeden i zagnieżdżonych
    var zmienna1 = 1;

    //Definicja funkcji dwa() zagnieżdżonej w funkcji jeden()
    function dwa() {

        //wydrukowanie w konsoli wartości zmiennej1 - sukces, ponieważ funkcja dwa() jako zagnieżdżona może korzystać ze zmiennych funkcji jeden()
        console.log(zmienna1);

        //definicja zmiennej lokalnej dla funkcji dwa()
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa() wyrzucające w konsoli wartość zmiennej1 - sukces - ponieważ funkcja dwa() może korzystać ze zmiennych funkcji jeden()
    dwa();

    //błąd - zmienna2 jest niewidoczna poza funkcją dwa()
    console.log(zmienna2)
}

//wywołanie funkcji jeden
jeden()