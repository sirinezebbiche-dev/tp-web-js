
const produit = { nom: "stylo", prix:"40", quntite:"50"};
console.log("valeur du stock de",produit.nom,":",produit.prix * produit.quntite);

const catalogue =[
    {nom: "stylo", prix: "40", quntite: "50"},
    {nom: "cahier", prix: "100", quntite: "30"},
    {nom: "trousse", prix: "400", quntite: "20"},
    {nom: "calculatrice", prix: "1000", quntite: "10"},
    {nom: "regle", prix: "155", quntite: "15"}
];
let somme=0;
for(let i=0; i<catalogue.length; i++){
    somme =somme+catalogue[i].prix;
}
const moyenne = somme / catalogue.length;
console.log("prix moyen:",moyenne);
console.log("produit au-dessus du prix moyen:");
for(let i=0; i<catalogue.length; i++){
    if(catalogue[i].prix > moyenne){
        console.log("nom",catalogue[i].nom,"prix",catalogue[i].prix);
    }
}

const totalArticle=catalogue.reduce(function(total,p){ return total + p.prix},0);
const val=catalogue.reduce(function(total,p){return total + p.prix*p.quntite},0);
console.log("nbr total",totalArticle);
console.log("val:",val);

function valeurStock(p){
    return p.prix * p.quntite;
}
console.log(catalogue[1].nom,valeurStock(catalogue[1]));
console.log(catalogue[2].nom,valeurStock(catalogue[2]));
console.log(catalogue[3].nom,valeurStock(catalogue[3]));

function applique (list, trait){
    for(let i=0; i<list.length; i++){
        trait(list[i]);
    }
}
console.log("noms produits:");
applique(catalogue,function(p){
    console.log("nom",p.nom);
});
console.log("prix produits:");
applique(catalogue,function(p){
    console.log("prix",p.prix);
});