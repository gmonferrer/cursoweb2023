const fechaObjetivo = new Date(); // crea una instancia de la fecha actual
fechaObjetivo.setHours(19, 0, 0); // establece la hora objetivo a las 19:00

// actualiza el contador cada segundo
const intervalID = setInterval(() => {
	const ahora = new Date(); // crea una instancia de la fecha y hora actual
	const diferencia = fechaObjetivo.getTime() - ahora.getTime(); // calcula la diferencia entre la fecha objetivo y la fecha actual en milisegundos

	// calcula el tiempo restante en horas, minutos y segundos
	let horas = Math.floor(diferencia / 1000 / 60 / 60);
	let minutos = Math.floor((diferencia / 1000 / 60) % 60);
	let segundos = Math.floor((diferencia / 1000) % 60);

	// actualiza los elementos HTML con el tiempo restante
	document.getElementById("horas").textContent = horas;
	document.getElementById("minutos").textContent = minutos;
	document.getElementById("segundos").textContent = segundos;

	// verifica si se alcanzó la hora objetivo y reproduce la señal sonora
	if (diferencia <= 0) {
		clearInterval(intervalID);
		document.getElementById("contador").innerHTML = "<p>¡Es la hora!</p>";
		document.getElementById("señal").play();
	}
}, 1000); // actualiza el contador cada segundo
