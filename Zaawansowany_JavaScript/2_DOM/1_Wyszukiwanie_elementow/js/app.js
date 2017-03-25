/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     
## Zadanie 1
Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
1. Element o **id** ```home``` (na dwa sposoby).


var home = document.getElementById('home');
var home1 = document.querySelector ('#home');
var home2 = document.querySelector ('[id=home]');

  /*2. Pierwszy element **li** nieposiadający atrybutu ```data-direction```.*/  

    document.querySelector('li:not[data-direstion]'); 
    
/*3. Pierwszy element o **klasie** ```block```.
Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. Pamiętaj, żeby używać funkcji, które wyszukują tylko jeden element.*/   

    document.querySelector('.block');    
    document.getElementsByClassName ('block');
 
    
  
/*  

## Zadanie 2
Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
1. Wszystkie elementy **li** znajdujące się w **tagu** ```nav```.
2. Wszystkie **paragrafy** należące do wszystkich elementów **div**.
3. Wszystkie **divy** znajdujące się w **tagu** ```article```.

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Pamiętaj, żeby używać funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile znalazłeś elementów.
*/
/*1. Wszystkie elementy **li** znajdujące się w **tagu** ```nav```.*/

    document.querySelectorAll ('nav li');
    
/*2. Wszystkie **paragrafy** należące do wszystkich elementów **div**.*/
    

    document.querySelectorAll('div p');

 /*3. Wszystkie **divy** znajdujące się w **tagu** ```article```.*/
    
    document.querySelectorAll('article div');
/*
## Zadanie 3

Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Pamiętaj, żeby używać funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile jest znalezionych przez Ciebie elementów.

1. Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej **tag** ```article``` o **klasie** ```first```.*/

    var tag = document.querySelectorAll('article.first');

/*2. W kolejnym etapie:
  * wypisz w konsoli, ile elementów **h1** znajduje się w tym **tagu**.
  * wyszukaj w nim wszystkie elementy o **klasie** ```oferts```, przeiteruj je i wypisz nazwy ich **tagów** w konsoli,
  * wyszukaj w nim wszystkie elementy **div**, przeiteruj je i wypisz nazwy ich klas w konsoli.*/

    for (var i=0; i<tag.length; i++) {
        console.log (tag[i].querySelectorAll('.oferts'));
    }
    var oferts = tag[0].querySelectorAll('.oferts');
    for (var i=0; i<tag.length; i++) {
        console.log (oferts[i].tagName);
    }
    
    var divSel = document.querySelectorAll('div');

    for (var j=0; j<tag.length; j++) {
        console.log (divSel[j].className);
    }
/*
## Ćwiczenie dodatkowe
Znajdź wszystkie elementy **li**, które są w tagu ```nav```. Następnie nadaj każdemu elementowi **li** atrybut ```data-direction = "top"```, ale tylko dla tych elementów, które nie mają ustawionego tego atrybutu.
*/
    
    var elemLi = document.querySelectorAll('nav li:not([data-direction])');
    for (var h; h<elemLi.length; h++) {
        elemLi[h].setAttribute('data-direction', h);
    }
    
});
