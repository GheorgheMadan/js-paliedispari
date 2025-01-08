// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma 
const userInput = prompt("Inserisci una parola:");
if (isPalindrome(userInput)) {
    console.log("è una parola palindroma!");
} else {
    console.log("Non è una parola palindroma.");
}

// FUNZIONE 
function parolaPalindroma(parola){
  // creo il ciclo che confronta i caratteri da inizio alla fine della stringa 
  for (let i = 0; i < Math.floor(parola.length / 2 ) i++ ) {
        // confronto 
        if (parola[i] !== parola[parola.length - 1 - i])
            // se i caratteri non coincidono, non è palindroma
            return false; 
  }
}