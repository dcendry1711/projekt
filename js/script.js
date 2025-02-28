//tablice

const samochody = ['audi','bmw','opel'];

const samochody2 = ['polonez','skoda','vw'];

// samochody.forEach((element) => console.log(element)); // iteracja po elementach tabeli

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
    }
]

// samochody3.forEach((element) => console.log(element));

//wyswietl marke samochodu, która ma przebieg wiekszy niz 130k

samochody3.forEach(function (e) {
    if (e.przebieg>130000){
        return console.log(e.marka);
    }
})