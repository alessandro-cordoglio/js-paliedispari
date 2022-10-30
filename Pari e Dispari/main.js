/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* FUNCTIONS */
function dispari(num){
    if (userNumber%2 == 0) {
        alert("scegli un numero pari")
        location.reload()
    }
    if (userNumber>5 || userNumber<1 ||userNumber==null) {
        alert("rispetta i parametri")
        location.reload()
    }
    
}

function pari(num){
    if (userNumber%2 == 1) {
        alert("scegli un numero pari")
        location.reload()
    }
    if (userNumber>5 || userNumber<1 ||userNumber==null) {
        alert("rispetta i parametri")
        location.reload()
    }
    
}
/* VARIABILI DI SUPPORTO */
const scelta=prompt("Pari o Dispari?")

//check pari o dispari
if (scelta.toLowerCase()== "pari") {
    const userNumber=prompt("Inserisci un numero da 1 a 5")
    pari()
}else if(scelta.toLowerCase()=="dispari"){
    const userNumber=prompt("Inserisci un numero da 1 a 5")
    dispari()
}

const chosenNumber=pari(userNumber)
console.log(chosenNumber)
