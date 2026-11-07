"use strict"; // signale les variables non définie "Mode strict pour éviter les variables implicites" (slide 52).

// "Les chaînes et les nombres sont des types primitifs" (silde 38).
// type primitif : declaration de vatiable et conctante
const nom = "John"; 
const prenom = "Doe";
const age = 30;
const note = 15;
const pi = 3.14;

// "Chaque fonction affiche la valeur associée à son bouton" (fonctions, slide 46).
//fonction simple
function f1() {
    console.log(nom);
}

function f2() {
    console.log(prenom);
}

//concatenation de chaine
function f3() {
    // L'opérateur + concatène les deux chaînes (slide 42).
    console.log(nom + "-" + prenom);
}

function f4() {
    console.log(age);
}

function f5() {
    console.log(note);
}

function f6() {
    console.log(pi);
}

// Le fichier externe est chargé de façon différée (slide 27-28) et les clics déclenchent les fonctions (slide 21).
document.getElementById("nom").addEventListener("click", f1);
document.getElementById("prenom").addEventListener("click", f2);
document.getElementById("nom-prenom").addEventListener("click", f3);
document.getElementById("age").addEventListener("click", f4);
document.getElementById("note").addEventListener("click", f5);
document.getElementById("pi").addEventListener("click", f6);
