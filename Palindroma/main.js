/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const word=prompt("Inserisci una parola")

//creazione della variabile contenente la parola al contrario
function reverse(string) {
    const len= word.length
    let revWord=""
    for (let i = len - 1; i >= 0; i--) {
       revWord+=word[i]
    }
    return revWord
}

//check se palindroma o no
function palindrome(string){
    reverseWord=reverse(word)
    if (reverseWord===word) {
        alert("la parola è palindroma")
    }else{
        alert("la parola non è palindroma")
    }
}

const result=palindrome(word)
console.log(result)


