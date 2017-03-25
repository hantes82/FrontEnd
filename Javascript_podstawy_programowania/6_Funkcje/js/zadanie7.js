/*
Zadanie 7

Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie dziesięć razy: "Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".
*/

var num = function stringOut() {
    for (var i=0; i<10; i++) {
        console.log ("Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych");
    }
    return 0;
}
console.log (num ());