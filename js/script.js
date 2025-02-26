let x = 2;

console.log(x+=2);
console.log(x-=2);
console.log(x*=2);
console.log(x/=2);

let y = 10;
console.log(y%=3);

let z = -1;
console.log('Przesunięcie w lewo będzie wynosiło: ' + (z<<1));
console.log('Przesunięcie w prawo będzie wynosiło: ' + (z>>1));

console.log('Przesunięcie w prawo z wypełnieniem: ' + (z>>>1));
