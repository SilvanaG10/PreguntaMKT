const music = new Audio('../../assets/intro - Trivia Crack.mp3');
music.play();
var miRuleta = new Winwheel({
  numSegments: 5,
  outerRadius: 200, 

  segments: [
    { fillStyle: "#FF3838", text: "UNIDAD 1", location: ('Unidades/UNIDAD 1/index.html') },
    { fillStyle: "#005FFF", text: "UNIDAD 2", location: ('Unidades/UNIDAD 2/index.html')  },
    { fillStyle: "#FFFF00", text: "UNIDAD 3", location: ('Unidades/UNIDAD 3/index.html')  },
    { fillStyle: "#00EC03", text: "UNIDAD 4", location: ('Unidades/UNIDAD 4/index.html')  },
    { fillStyle: "#8005FF", text: "UNIDAD 5", location: ('Unidades/UNIDAD 5/index.html')  },
  ],
  animation: {
    type: "spinToStop",
    duration: 5,
    callbackFinished: "mensaje()",
    callbackAfter: "dibujarIndicador()"
  }
});

dibujarIndicador();

function mensaje(){

}

function mensaje() {
  var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
  location.replace(SegmentoSeleccionado.location)
  alert("Elemento seleccionado: " + SegmentoSeleccionado.text);

  miRuleta.stopAnimation(false);
  miRuleta.rotationAngle = 0;
  miRuleta.draw();
  dibujarIndicador();
}

function dibujarIndicador() {
  var ctx = miRuleta.ctx;
  ctx.strokeStyle = "navy";
  ctx.fillStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(220, 20);
  ctx.lineTo(280, 20);
  ctx.lineTo(250, 80);
  ctx.lineTo(220, 20);
  ctx.stroke();
  ctx.fill();
}
