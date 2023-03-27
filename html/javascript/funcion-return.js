var x, y, z, w;
x = multiplicar(4, 3);
y = dividir(8,4);
z = sumar(6,7);
w = restar(15,10);

      document.getElementById("demo").innerHTML = "La multiplicación es " +  x;
      document.getElementById("demo1").innerHTML = "La división es " + y;
      document.getElementById("demo2").innerHTML = "La suma es " + z;
      document.getElementById("demo3").innerHTML = "La resta es " + w;

      function multiplicar (a, b) {
        return a * b;
      }
      function dividir (a,b) {
        return a / b;
      }

      function sumar (a, b){
        return a + b;
      }

      function restar (a, b){
        return a - b;
      }

      var j = function (a,b) {
        console.log (a + b);
      } ;
      j(20,40) ;
      j(10,3)  ;

      
      