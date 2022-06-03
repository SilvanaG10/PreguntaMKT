let INDEX_PREGUNTA = 0;
let puntaje = 0;
let pregunta = [...baseDePreguntas];
    pregunta.sort(() => Math.random()-0.5);
    baseDePreguntas = pregunta.slice(0, 3);

cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index) {
  const music = new Audio('../../assets/preguntas - Trivia Crack.mp3');
  music.play();
  objetoPregunta = baseDePreguntas[index];
  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if (objetoPregunta.imagen) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }

  if (objetoPregunta.ayuda) {
    document.getElementById("ayuda").style.display = "";
  } else {
    document.getElementById("ayuda").style.display = "none";
  }

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];
}

async function seleccionarOpción(index) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    const music = new Audio('../../assets/correcto - Trivia Crack.mp3');
    music.play();
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++;
    
  } else {
    const music = new Audio('../../assets/incorrecto - Trivia Crack.mp3');
    music.play();
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });
  }

  INDEX_PREGUNTA++;
  
  if (INDEX_PREGUNTA >= baseDePreguntas.length) {
    const music = new Audio('../../assets/intro - Trivia Crack.mp3');
    music.play();
    await Swal.fire({
      title: "Juego terminado,regresa al tablero",
      text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
    });
    INDEX_PREGUNTA = 0;
    puntaje = 0;
    location = "../../index.html"
  }
  cargarPregunta(INDEX_PREGUNTA);
}
