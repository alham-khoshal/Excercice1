var words = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var sorted = [];

for (var i = 0; i < words.length; i++) {

        sorted.push(words[i].toLowerCase());
};
var prenom = window.prompt("Entrerz un prenom")
var prenom1 = prenom.toLowerCase();
if (sorted.includes(prenom1)){
    sorted.splice(sorted.indexOf(prenom1),1);
    sorted.push =" ";
    
}
document.write(sorted + "<br>" )
document.write( sorted.length + 1)