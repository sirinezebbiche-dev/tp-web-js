"use strict"; // Mode strict pour éviter les variables implicites (slide 52).

// Les tableaux et leurs chaînes sont des données manipulées dans l'exercice (slide 38-39).
//tableau de chaine + boucle 
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Un objet regroupe les propriétés d'un étudiant (slide 40).
//objet litteral
const objetEtudiant = {
    nom: "John",
    prenom: "Doe",
    age: 30
};

// Un tableau peut contenir plusieurs objets (slide 41).
//tableau d'objets
const tableauObjetsEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Les fonctions affichent les données demandées (slide 46).
function f1() {
    // forEach parcourt chaque élément du tableau (slide 45).
    tableauEtudiants.forEach(function (etudiant) {
        console.log(etudiant);
    });
}

function f2() {
    console.log(objetEtudiant);
}

function f3() {
    tableauObjetsEtudiants.forEach(function (etudiant) {
        // La concaténation assemble les propriétés pour produire une chaîne (slide 42).
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    });
}

// Le fichier externe est chargé de façon différée (slide 27-28) et les clics déclenchent les fonctions (slide 21).
document.getElementById("tableau-etudiants").addEventListener("click", f1);
document.getElementById("objet-etudiant").addEventListener("click", f2);
document.getElementById("tableau-objets").addEventListener("click", f3);
