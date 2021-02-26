//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//chiedo all'utente di inserire una parola
var parolaInserita = prompt("inserisci una parola");

//creo due var con le lettere della parola
function isPalindroma(parola) {
    var parolaInseritaMin = parola.toLowerCase();
    var lettereOrdinate = [];
    var lettereContrario = [];

    //scorro la parola per creare i due var
    for (i = 0; i < parolaInseritaMin.length; i++) {
        lettereOrdinate.push(parolaInseritaMin.charAt(i));
    };
    for (i = parolaInseritaMin.length - 1; i >= 0; i--) {
        lettereContrario.push(parolaInseritaMin.charAt(i));
    };

    console.log(lettereOrdinate);
    console.log(lettereContrario);

    //se i due var sono uguali la parola è palindroma
    var arrayuguali = true;

    for (i = 0; i < parolaInseritaMin.length; i++) {
        if (lettereContrario[i] != lettereOrdinate[i]) {
            arrayuguali = false;
        }
    };

    if (arrayuguali == true) {
        return true;
    } else {
        return false;
    };
};

//se la funzione è vera la parola è palindroma e mando l'alert,se è falsa la risposta è palindroma e mando l'alert.

if (isPalindroma(parolaInserita) == true) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma")
};








