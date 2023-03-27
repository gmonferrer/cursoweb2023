// función normal
function funcion(altura) {
    return (5 * altura) / 2;
  }
  //función anónima, es una variable
  let funcion2 = function (altura) {
      return (5 * altura) / 2;
    };
  // función de flecha, es una variable
  const funcion3 = (altura) => {
    return (5 * altura) / 2;
  };
  // forma simplificada de la función de flecha, variable
  const funcion4 = (altura) => (5 * altura) / 2;
  
  console.log(funcion(3));
  console.log(funcion2(3));
  console.log(funcion3(3));
  console.log(funcion4(3));
  //return 7.5