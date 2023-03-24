function agregar(valor) {
  document.getElementById("resultado").value += valor;
}

function limpiar() {
  document.getElementById("resultado").value = "";
}

function calcular() {
  var resultado = eval(document.getElementById("resultado").value);
  document.getElementById("resultado").value = resultado;
}

document.addEventListener('keydown', function(event) {
  var tecla = event.key;
  switch (tecla) {
    case '0':
      agregar(0);
      break;
    case '1':
      agregar(1);
      break;
    case '2':
      agregar(2);
      break;
    case '3':
      agregar(3);
      break;
    case '4':
      agregar(4);
      break;
    case '5':
      agregar(5);
      break;
    case '6':
      agregar(6);
      break;
    case '7':
      agregar(7);
      break;
    case '8':
      agregar(8);
      break;
    case '9':
      agregar(9);
      break;
    case '.':
      agregar('.');
      break;
    case '+':
      agregar('+');
      break;
    case '-':
      agregar('-');
      break;
    case '*':
      agregar('*');
      break;
    case '/':
      agregar('/');
      break;
    case 'Enter':
      calcular();
      break;
    case 'Backspace':
      limpiar();
      break;
    default:
      break;
  }
});