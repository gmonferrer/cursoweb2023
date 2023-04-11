//ej3
//Declaro variable y asigno "tipo" array
var colores = [];

//Genero los datos a trav?s de prompt
for (let i = 0; i <= 2; i++) {
  let color = prompt("Escribe un color", "");
  colores[i] = color;
}

document.getElementById("demo3").innerHTML = "Los colores son: ";
console.log(colores);

//Este bucle sirve para mostrarlos
for (const color of colores) {
  if (color != null) {
    
    document.getElementById("colores").innerHTML += "<li>" + color + "</li>";
  }

}
