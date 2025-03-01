const samochody3 = [
    {
        marka: "opel",
        model: "astra",
        przebieg: 120000,
        cena: 10000,
        ilosc: 3
    },
    {
        marka: "mazda",
        model: "5",
        przebieg: 140000,
        cena: 12000,
        ilosc: 4 
    },
    {
        marka: "toyota",
        model: "auris",
        przebieg: 23000,
        cena: 56000,
        ilosc: 7 
    }
]

//podliczyć wartość wszystkich aut jakie są w tablicy
const wartoscAut = samochody3.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.ilosc*currentValue.cena;
},0)

console.log(wartoscAut);




// samochody3.forEach((element) => console.log(element));
//wyswietl marke samochodu, która ma przebieg wiekszy niz 130k
// samochody3.forEach(function (e) {
//     if (e.przebieg>130000){
//         return console.log(e.marka);
//     }
// })
//zastsosować .map() do podniesienia ceny samochodów w tablicy o 20%
// const samochody4 = samochody3.map((x) => x.cena*1.2);
// console.log(samochody4);
//stworzyć tablicę gdzie będą wartości samochodów, których przebieg będzie większy od
//130k 
// const wartoscSamochodu = samochody3.filter((auto) => {
//     if (auto.przebieg<130000) {
//         return auto;
//     }
// })
// console.log(wartoscSamochodu);
//