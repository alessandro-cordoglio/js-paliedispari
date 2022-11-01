/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/* FUNCTIONS */

   
    

  

/* VARIABILI DI SUPPORTO */
const scelta=prompt("Pari o Dispari?")
const userNumber=prompt("Inserisci un numero da 1 a 5")

//check pari o dispari
if (scelta.toLowerCase()== "pari") {
    if (userNumber%2 == 1) {
        alert("scegli un numero pari")
        location.reload()
    }
    if (userNumber>5 || userNumber<1 ||userNumber==null) {
        alert("rispetta i parametri")
        location.reload()
    }
    
}else if(scelta.toLowerCase()=="dispari"){
    if (userNumber%2 == 0) {
        alert("scegli un numero pari")
        location.reload()
    }
    if (userNumber>5 || userNumber<1 ||userNumber==null) {
        alert("rispetta i parametri")
        location.reload()
    }
}


const chosenNumber=pari(userNumber)
console.log(chosenNumber)
