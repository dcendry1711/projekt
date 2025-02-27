// let a = 1;
// while (a <= 10){
//     console.log(a);
//     a++;
// }

//Tworzymy skrypt który obliczy sumę dwóch liczb. 
// Liczby będą podane przez użytkownika. 
// Algorytm będzie wyświetlał liczby do momentu aż ich suma będzie mniejsza od 0.

// let a = 0 ;
// let b = 0 ;
let suma = 0;

while (suma >= 0){
    let a = parseInt(prompt('podaj pierwszą liczbę'));
    let b = parseInt(prompt('podaj drugą liczbę'));
    suma = a + b;
    console.log('Suma podanych liczb wynosi: ' + suma);
}