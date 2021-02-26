//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//chiedo all'utente di inserire una parola
var parolaInserita = prompt("inserisci una parola");
var parolaInseritaMin =parolaInserita.toLowerCase();
console.log(parolaInseritaMin);

//creo due var con le lettere della parola
var lettereOrdinate = [];
var lettereContrario = [];

//scorro la parola per creare i due var
for (i=0; i<parolaInseritaMin.length; i++) {
    lettereOrdinate.push(parolaInseritaMin.charAt(i));
};
for (i=parolaInseritaMin.length -1 ; i>= 0; i--) {
    lettereContrario.push(parolaInseritaMin.charAt(i));
};

console.log(lettereOrdinate);
console.log(lettereContrario);

//se i due var sono uguali la parola è palindroma
var arrayuguali = true;

for (i=0; i<parolaInseritaMin.length; i++) {
    if (lettereContrario[i] != lettereOrdinate[i]) {
        arrayuguali=false;
    }
};

if (arrayuguali == true) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
};



// function parolaPalindroma (parola) {
    
// }




