"use strict"; // Mode strict pour éviter les variables implicites (slide 52).

// Students est un tableau d'objets contenant les données de l'énoncé (slide 39-41).
//tableau d'objets
const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14.5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7.1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13.3 }
];

// A utilise une boucle (slide 45) et une variable locale let (slide 52), puis appelle B (slide 46).
function A() {
    for (let i = 0; i < Students.length; i++) {
        // La condition utilise if/else pour produire la délibération (slide 43).
        if (B(Students[i].note)) {
            console.log(Students[i].id + ": ADMIS");
        } else {
            console.log(Students[i].id + ": AJOURNÉ");
        }
    }
}

// B reçoit un nombre et renvoie un booléen (slide 38); >= compare au seuil (slide 42).
function B(note) {
    return note >= 10;
}

// Le clic appelle A (événement, slide 21).
document.getElementById("deliberation").addEventListener("click", A);
