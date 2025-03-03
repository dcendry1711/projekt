const samochody = [
    {
        marka: 'Opel',
        model: 'Astra',
        przebieg: 120000,
        cena: 10000,
        ilosc: 3,
        wyswietl: function(){
            return console.log(this.marka + ' '+this.model+' '+this.cena);
        }
    },
    {
        marka: 'Mazda',
        model: '5',
        przebieg: 140000,
        cena: 12000,
        ilosc: 4,
        wyswietl: function(){
            return console.log(this.marka + ' '+this.model+' '+this.cena);
        } 
    },
    {
        marka: 'Mazda',
        model: '6',
        przebieg: 230000,
        cena: 12000,
        ilosc: 4,
        wyswietl: function(){
            return console.log(this.marka + ' '+this.model+' '+this.cena);
        }   
    }
];

// function wyswietl(){
//     console.log(this);
// }

// wyswietl.call(samochody);

function newCar(marka,model,przebieg){
    this.marka = marka;
    this.model = model;
    this.przebieg = przebieg
}

function setPrice(cena){
    newCar.call(this, 'Mazda','2',45000);
    this.cena = cena;
    console.log('szczegóły samochodu: ' , this);
}

const nowySamochod = new setPrice(parseInt(prompt('Podaj cenę samochodu: ')));