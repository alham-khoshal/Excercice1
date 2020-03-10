var str = Array(parseInt(prompt("saisissez la taille du tableau")));
for (let i = 0; i < str.length; i++) {
    str[i] = parseInt(prompt("saisissez le element"))
}
document.write(str)
var arr = str
var max = arr[0]
var min = arr[0]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i]
    }
    if (arr[i] < min) {
        min = arr[i]
    }
}

document.write(" <br> votre maximum est de " + max)
document.write(" <br> votre minimum est de " + min)