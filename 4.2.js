let h=0;
let age=0;
let a=0;
h=prompt("hommes femmes");
if (h=="homme"){
    age=prompt("age");
} if (age>=20)
  console.log("oui");
else if (h=="femme"){
  a=prompt("age");
} if (a>=18 || a<=35){
  console.log("oui");
}else 
console.log("non");

let h=0;
let m=0;
let a=0;
h=prompt("hommes femmes");
if (h=="homme"){
    m=prompt("age");
} if (m>=20){
  console.log("oui");
}else if (m<=19)
console.log("non");
else if (h=="femme"){
  a=prompt("age");
} if (a>=18 && a<=35){
  console.log("oui");
}else if (a<=17 && a>36)
console.log("non");
