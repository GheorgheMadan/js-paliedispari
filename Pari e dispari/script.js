// creo l'input per l'utente 
const userPariDispari = prompt("Scegli pari o dispari: ");
console.log(userPariDispari)
const userNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumero);

// IL PC GENERA UN NUMERO RANDOM 
const numeroPC = generaNumeroRandomDa1A5()
console.log(numeroPC)

// SOMMA DEI NUMERI 
const sommaNumeri = userNumero + numeroPC
console.log("la somma dei numeri è: " + sommaNumeri)

console.log(pariOdispari(sommaNumeri))
//  FUNZIONE CHE GENERA UN NUMERO DA 1 A 5
function generaNumeroRandomDa1A5(){
    const numeroGenerato = Math.floor(Math.random() * 5) + 1;
    
    return numeroGenerato
}

// FUNZIONE CHE INDICA SE UN NUMERO è PARI O DISPARI 
function pariOdispari(numero){
    // dischiarazione variabile
    let risultato; 
    if (numero % 2 === 0){
        risultato ="pari";
    } else {
        risultato = "dispari";
    }
    // dichiariamo il vincitore
    let risposta
    if (userPariDispari === risultato){
        risposta = "hai vinto! il risultato è: " + risultato;
    } else {
        risposta = "hai perso! il risultato è: " + risultato;
    }
    return risposta
}