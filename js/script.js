let wybor;
const pracownicy = new Array();

function Osoba(imie,nazwisko,numer){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.numer = parseInt(numer)
}

// function tworzenie(imie,nazwisko){
//     osoba = new Osoba(imie,nazwisko);
//     pracownicy.push(osoba);
// }

// function usuwanie(nr){
//     delete pracownicy[nr];
// }


const metody = {
    wyswietlPracownika: function() {
        document.write('Imię: ', this.imie, ' nazwisko: ', this.nazwisko)
    },
    usuwaniePracownika: function() {
        delete pracownicy[this.numer-1];
    },
    tworzeniePracownika: function(imie,nazwisko,numer) {
        console.log(this)
        let osoba = new Osoba(imie,nazwisko,numer);
        pracownicy.push(osoba);
    }
}

while(wybor!=0){
    wybor = prompt('Podaj co chcesz zrobić? 1- tworzenie 2-usuwanie 3-wyswietlanie 4-wyświetl pracownika0 0-wyjscie')
switch(wybor){
    case '1': 
        let imie = prompt('Podaj imię: ');
        let nazwisko = prompt('Podaj nazwisko: ');
        let numer = prompt('Podaj nr pracownika: ')
        let tworzenie = metody.tworzeniePracownika.bind(pracownicy)
        tworzenie(imie,nazwisko,numer);
        break;
    case '2':
        let nrP = prompt('Podaj numer ideksu do usunięcia: ');
        metody.usuwaniePracownika.apply(pracownicy[nrP]);
        wybor=0;
        break;
    case '3':
        pracownicy.forEach((e)=>{
            console.log(e);
        })
        break;
    case '4': 
        let nr = prompt('Podaj nr indeksu pracownika: ');
        metody.wyswietlPracownika.call(pracownicy[nr]);
        wybor=0;
        break;
    default:
        document.write('nie wybrano odpowiedniej opcji!')
}
}

console.log(pracownicy);
