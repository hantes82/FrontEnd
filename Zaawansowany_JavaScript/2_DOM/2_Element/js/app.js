/**
 * Created by Jacek on 2016-01-11.
 */
var that = this;
document.addEventListener("DOMContentLoaded", function(){
    that.homeElement = document.getElementById("home");
    that.childElements = document.querySelector(".oferts").children;
    that.banner = document.querySelector(".ban");
    that.blocks = document.querySelectorAll(".block");
    that.links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
/*## Zadanie 1
Przeanalizuj kod HTML i JavaScript tego zadania. Wypisz w konsoli wszystkie wcześniej przygotowane zmienne, ich typy i klasy.
W przypadku tablic przeiteruj (używając np. pętli **for**), wypisując typ i klasę dla każdego elementu, który znajduje się w tablicy.*/
    console.log("Nazwa klasy: " +homeElement.className + " Nazwa tagu: "+homeElement.tagName);
    for (var i=0; i<childElements.length; i++) {
        console.log("Nazwa klasy: " +childElements[i].className + " Nazwa tagu: "+childElements[i].tagName );
    }
    console.log("Nazwa klasy: " +banner.className + " Nazwa tagu: "+banner.tagName);
     for (var i=0; i<blocks.length; i++) {
        console.log("Nazwa klasy: " +blocks[i].className + " Nazwa tagu: "+blocks[i].tagName);
    }
      for (var n=0; n<blocks.length; n++) {
        console.log("Nazwa klasy: " +links[n].className + " Nazwa tagu: "+links[n].tagName);
    }


/*## Zadanie 2
Wypisz w konsoli wartości ```innerHTML``` i ```outerHTML``` dla elementów zmiennej ```blocks```. Napisz w komentarzu, czym się od siebie różnią.
Nastaw wartość ```innerHTML``` na "Nowa wartość diva o klasie blocks". Przeanalizuj, jak zmienił się kod HTML strony.*/
    for (var j=0; j<blocks.length; j++){
        console.log (blocks[j].innerHTML);
        console.log (blocks[j].outerHTML);
    //innerHTML wyświetla tagi i ich zawartość - bez pokazania tagów ich rodzica, natomiast outerHTML wyświetla tagi i ich zawartość łącznie z tagami rodzica je zawierającego
    for (var h=0; h<blocks.length; h++) {
        blocks[h].innerHTML = "Nowa wartość diva o klasie blocks";
        //wartość diva o klasie "blocks" została nadpisana dodaną zawartością
    }
    }

/*# Zadanie 3
Wypisz w konsoli **id** elementu kryjącego się w zmiennej ```homeElement```.*/

    console.log(homeElement.id);
    
 /*## Zadanie 4
Wypisz w konsoli tagi wszystkich elementów, które znajdują się w zmiennej ```childElements``` (pamiętaj o tym, że jest to tablica). */
    
    for (var g=0; g<childElements.length; g++) {
       console.log( childElements[g].tagName);
    }
    
/*## Zadanie 5
Wypisz w konsoli wartość atrybutu ```dataset``` dla każdego elementu znajdującego się w zmiennej ```links``` (pamiętaj o tym, że jest to tablica).*/
    for (var c=0; c<childElements.length; c++) {
       console.log( links[c].dataset);
    }
   
/*## Zadanie 6
Wypisz w konsoli wartość atrybutów ```classList``` i ```className``` dla zmiennej ```banner```.
Wypisz w konsoli, jakiego typu (i ewentualnie jakiej klasy) są te wartości.*/

    console.log(banner.classList);
    console.log(banner.className);
    typeof banner;
    console.log(typeof banner.classList);
    console.log(typeof banner.className);
});



