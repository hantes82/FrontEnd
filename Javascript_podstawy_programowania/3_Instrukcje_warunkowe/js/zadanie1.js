//Zadanie 1 &ndash; rozwiązywane z wykładowcą

//Napisz skrypt definiujący trzy liczby: **a**, **b** i **c**. Skrypt ma sprawdzić, czy podane liczby mogą być bokami trójkąta.
//Tę figurę geometryczną można zbudować z trzech linii tylko wtedy, gdy suma długości dwóch z nich jest większa niż długość trzeciej linii

var a = Math.floor(Math.random()*100);
var b = Math.floor(Math.random()*100);
var c = Math.floor(Math.random()*100);

console.log (a);
console.log (b);
console.log (c);

if (((a+b)>c) && ((c+b)>a) && ((a+c)>b)) {
    
    console.log ("Jest możliwe zbudowanie trójkata");
}
    else {
        console.log ("Nie jest możliwe zbudowanie trójkąta z podanych długości")
    }