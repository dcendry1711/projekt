//let x = 1;
// switch (x){
//     case 1:
//     case 2:
//     case 3:
//         if(x<2){
//             console.log('x wynosi 1');
//         } else if (x==2) {
//             console.log('x wynosi 2');
//         } else {
//             console.log('x wynosi 3');
//         }
//         //console.log('x wynosi 1, 2 lub 3');
//         break;
//     case 4:
//         console.log('x wynosi 4');
//         break;
//     case 5:
//         console.log('x wynosi 5');
//         break;
//     default:
//         console.log('żadna z powyższych opcji nie została wybrana');
// }

let x = 3;
let y = 5;
let z = 10;

//która z wartości jest największa (lepsza opcja bez zagnieżdżania)

if (x>y && x>z) {
    console.log('wartość x jest największa i wynosi ' + x);
} else if (y>x && y>z) {
    console.log('wartość y jest największa i wynosi ' + y);
} else {
    console.log('wartość z jest największa i wynosi ' + z);
}

