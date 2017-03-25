/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){
var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})""
/*Po umieszczeniu kodu js jako zawartości addEventListener "DOMContentLoaded", drzewo DOM jest najpierw wczytywane, a następnie wykonywany jest kod. Bez tego po umieszczeniutagu script w sekcji head kod nie zostaje wykonany ponieważ jest uruchamiany przed wczytaniem drzewa DOM*/

