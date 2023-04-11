//Código de TypeScript
const saludos = (persona: string) => {
  return "Hola, " + persona;
};
const usuario: string = "Marcos";
console.log(usuario);
document.body.innerHTML = saludos(usuario);