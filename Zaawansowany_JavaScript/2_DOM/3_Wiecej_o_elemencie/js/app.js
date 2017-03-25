/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
/*## Zadanie 1
Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
Napisz kod JavaScript, który wprowadzi następujące zmiany:
1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```).
2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut ```href```.
3. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).*/

    var browsers = [
        {
            browser: 'Google Chrome',
            link: 'http://www.google.pl',
        },
        {
            browser: 'Microsoft Edge',
            link: 'https://www.microsoft.com/pl-pl/windows/microsoft-edge',
        },
        {
            browser: 'Firefox',
            link: 'http://www.firefox.pl',
        }
    ];
    
    var links = document.querySelector('div.exercise.ex1').querySelectorAll('a');
    
    
    for (var i = 0; i < links.length; i++) {
        links[i].innerText = browsers[i].browser;
        links[i].setAttribute('href',browsers[i].link);
        console.log(links[i]);
        
    }
    var firstChrome = document.querySelector('.exercise.ex1 div div.chrome');
    var secondFir = document.querySelector('.exercise.ex1 div div.firefox');
    var thirdEdge = document.querySelector('.exercise.ex1 div div.edge');
    
    thirdEdge.style.backgroundImage = "url(assets/img/edge.png)";
    secondFir.style.backgroundImage = "url(assets/img/firefox.png)";
    firstChrome.style.width = "100px";
          
        
/*## Zadanie 2
Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.
1. Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych.
2. Za pomocą ```innerHTML``` wypełnij w nich odpowiednie informacje.*/

    document.querySelector('.exercise.ex2 #name').innerHTML = "Konrad Putelbergier";
    document.querySelector('.exercise.ex2 #fav_color').innerHTML = "Red";
    document.querySelector('.exercise.ex2 #fav_meal').innerHTML = "Sushi";
    
/*
## Zadanie 3
Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
1. Wyszukaj element ```ul``` i dodaj mu klasę ```menu```.
2. Wyszukaj wszystkie elementy ```li``` i dodaj im klasę ```menuElement``` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy ```selected```.
3. Zauważ, że jeden z elementów ma czerwony kolor tekstu. Jest to spowodowane tym, że ma **klasę** ```error```. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę **klasę** wszystkim elementom, które ją mają).*/
    
    var elemUl = document.querySelector('.exercise.ex3 ul');
    elemUl.classList.add('menu');
    
    var elemLi = document.querySelectorAll('.exercise.ex3 ul li'); 
    for (var i = 0; i < elemLi.length; i++) { 
        elemLi[i].classList.add('menuElement'); 
    }
    
    var elemErr = document.querySelectorAll('.exercise.ex3 ul li');
    for (var i = 0; i < elemErr.length; i++) {
        elemErr[i].classList.remove('error');
    }
    
/*
## Zadanie 4
Dodaj do każdego elementu listy atrybut ```data-id``` przyjmujący kolejne liczby całkowite (zaczynając od 1). Rozwiąż to zadanie na dwa sposoby:
1. Użyj datasetu.
2. Użyj metody ```setAttribute```.*/
/*
    var firstCase = document.querySelectorAll('.exercise.ex4 li');
    for (var j = 0; j < firstCase.length; j++) {
        firstCase[j].dataset.id = j+1;
    }*/
    
    var firstCase = document.querySelectorAll('.exercise.ex4 ul li');
    for (var i = 0; i < firstCase.length; i++) {
        firstCase[i].setAttribute ("data-id", i+1);       
    }
/*    
## Zadanie 5
Zmodyfikuj listę w następujący sposób:
1. Dodaj atrybut ```data-direction``` nastawiony na wartość ```up``` każdemu elementowi **li**, który nie ma tego atrybutu.
2. Nastaw kolor tła co drugiego elementu listy na zielony.
3. Nastaw piątemu elementowi listy **klasę** ```big```.
4. Nastaw co trzeciemu elementowi podkreślenie.  */
    
    var secCase = document.querySelectorAll('div.ex5 ul li:not([data-direction])');
    for (var i = 0; i < secCase.length; i++) {
        secCase[i].setAttribute("data-direction","up");
    }
    
    var backCol = document.querySelectorAll('div.ex5 ul li:nth-child(2n)');
    for (var i = 0; i < secCase.length; i++) {
        backCol[i].style.backgroundColor = 'green';
    }
    
    document.querySelector('div.ex5 ul li:nth-child(5)').classList.add('big');
    
    var evThird = document.querySelectorAll('div.ex5 ul li:nth-child(3n)');
    for (var i = 0; evThird.length; i++) {
        evThird[i].style.textDecoration = 'underline';
    }
    
});