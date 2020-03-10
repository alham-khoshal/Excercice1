//Exercice 1  total d'une commande
let prix = parseInt(prompt("saisiez le prix "));
let qet = parseInt(prompt("saisiez le quantité "));
let pap = prix * qet;
let rem = 0;
let port = 0;
let tot = 0;
let ram = 0;
if (pap < 100) {
    rem = pap / 100 * 100;
    port = rem / 100 * 2;
    if (port < 6) { port = 6; }
    ram = pap / 100 * 0;
    tot = rem + port;
} else if (pap >= 100 && pap <= 299) {
    rem = pap / 100 * 95;
    ram = pap / 100 * 5;
    port = rem / 100 * 2;
    if (port < 6) { port = 6; }
    tot = rem + port;
} else if (pap >= 300 && pap <= 555) {
    rem = pap / 100 * 90;
    ram = pap / 100 * 10;
    port = rem / 100 * 2;
    if (port < 6) { port = 6; }
    tot = rem + port;
} else if (pap >= 556) {
    port = 0;
    rem = pap / 100 * 90;
    tot = rem + port;
    ram = pap / 100 * 10;
}
document.write(" <br> <br> <br> <center> total de votre commande est   " + pap + " € " + "<br> </center>")
document.write(" <br> <center> remise de votre commande est " + ram + " € " + "<br> </center>")
document.write(" <br> <center> port de votre commande est " + port + " € " + "<br> </center>")
document.write(" <br> <center> total de votre prix est " + tot + " € " + "<br> </center>")