//Exercice 4 - Calcul du nombre de jeunes, de moyens et de vieux
let age = 0;
let s = 0;
let m = 0;
let l = 0;

while (age < 100) {
    age = parseInt(prompt("age"));

    if (age >= 20 && age <= 40) {
        m++;
    } else if (age < 20) {
        s++;
    } else if (age > 40) {
        l++;
    }

}
document.write(" les personnes inférieur à 20 ans est " + s + " <br>")
document.write("les personnes entre 20 ans et 40 ans est " + m + " <br>")
document.write(" les personnes supérieur à 40 ans est " + l + " <br>")