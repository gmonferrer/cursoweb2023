// funci�n normal
function funcion(altura) {
    return (5 * altura) / 2;
  }
  //funci�n an�nima, es una variable
  let funcion2 = function (altura) {
      return (5 * altura) / 2;
    };
  // funci�n de flecha, es una variable
  const funcion3 = (altura) => {
    return (5 * altura) / 2;
  };
  // forma simplificada de la funci�n de flecha, variable
  const funcion4 = (altura) => (5 * altura) / 2;
  
  console.log(funcion(3));
  console.log(funcion2(3));
  console.log(funcion3(3));
  console.log(funcion4(3));
  //return 7.5