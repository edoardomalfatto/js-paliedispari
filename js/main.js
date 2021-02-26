//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo se l'utente ha vinto.


//faccio inserire all'utente se sceglie pari o dispari
var pariDispari = (prompt("pari o dispari?"));

//faccio inserire all'utente un numero da 1 a 5
 var secondoNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));

//creo una funzione per generare un numero random
function randomNumbers(min ,max) {
    return Math.floor(Math.random() * ( max - min +1) + min);
}

//creo una funzione per sommare due numeri
function sommaNumbers(num1 ,num2){
    return (num1 + num2);
}

//sommo numero dell'utente con numero del computer
var numeriSommati = (sommaNumbers(randomNumbers(1,6), (secondoNumero)));
console.log(randomNumbers(1,6));
//se l'utente sceglie pari e la somma e pari , o l'utente sceglie dispari e la somma e dispari, allora l'utente ha vinto.
if (pariDispari == "pari" && numeriSommati % 2 ==0) {
    alert("L'utente ha vinto");
} else if
    (pariDispari == "dispari" && numeriSommati % 2 !=0) {
        alert("L'utente ha vinto");  
} else {
    alert("Il pc ha vinto");
};

