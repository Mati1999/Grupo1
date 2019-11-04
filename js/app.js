//VARIABLES
var string = "Grupo 1";
var array = ["Agustin","Ale","Magui","Mati"];
var boolean = true;
var impares = [];

//IMPARES HASTA 137
for (let i = 1; i<=137; i = i+2) {
  impares.push(i);
};

//LOGS
console.log("Este es un string: " + string);
console.log("Este es un array: " + array);
console.log("Este es un boolean: " + boolean);
console.log("Estos son los impares hasta 137: " + impares);

//OBJETOS
var ironMan = {
  nombre: "Iron Man",
  equipo: "Avengers",
  poderes: ["Volar","Lanzar misiles","Disparar láser"],
  energia: Number(100),
  getPoder: function (index) {
    return poderes[index];
    console.log("!!!!!"+poderes[index]);
  },
};

var hulk = {
  nombre: "Hulk",
  equipo: "Avengers",
  poderes: ["Aplastar","Gritar","Golpear"],
  energia: Number(100),
  getPoder: function (index) {
    return poderes[index];
    console.log("!!!!!"+poderes[index]);
  },
};
