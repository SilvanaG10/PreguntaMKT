function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Cuál es el elemento más crucial a la hora de lanzar un proyecto?",
      respuesta: "El conocimiento del producto",
      distractores: ["Comprobaciones de calidad y las pruebas beta", "La estrategia de marketing", "Los sistemas de capacitación"],
    },
    {
      pregunta: "Es una herramienta utilizada por los equipos de marketing para comprobar y documentar la integridad de los procesos.",
      respuesta: "Plan de lanzamiento de un producto",
      distractores: ["Proceso creativo", "Innovación mercadológica", "Sistemas de capacitación"],
    },
    {
      pregunta: `Es la capacidad o habilidad del ser humano para inventar o crear cosas.`,
      respuesta: `Creatividad`,
      distractores: [`Innovación`, `Incubación`, `Desarrollo`],
    },
    {
      pregunta: `Acción de cambio que supone una novedad.`,
      respuesta: `Innovación`,
      distractores: [`Incubación`, `Creatividad`, `Desarrollo`],
    },
    {
      pregunta: `Implementación de un nuevo método de comercialización que no se ha utilizado antes y que se caracteriza por importantes cambios o mejoras.`,
      respuesta: `Innovación mercadológica`,
      distractores: [`Plan de lanzamiento de un producto`, `Proceso creativo`, `Sistemas de capacitación`],
    },
    {
      pregunta: `Conjunto de individuos cuyas características, deseos y necesidades se adecúan a los productos y servicios de una marca.`,
      respuesta: `Consumidor objetivo`,
      distractores: [`Segmentación de mercados`, `Clientes definidos`, `Todas son correctas`],
    },
    {
      pregunta: `¿Cuál de las siguientes opciones no corresponde a un tipo de posicionamiento de producto?`,
      respuesta: `Basado en las pruebas`,
      distractores: [`Basado en el precio`, `Basado en la calidad`, `Basado en problemas y soluciones`],
    },
    {
      pregunta: `Proceso que permite dividir y organizar en grupos a los potenciales consumidores teniendo en cuenta una serie de características comunes.`,
      respuesta: `Segmentación de mercados`,
      distractores: [`Consumidor objetivo`, `Clientes definidos`, `Todas son correctas`],
    },
    {
      pregunta: `¿Son las etapas por las que atraviesa un producto o servicio desde su lanzamiento hasta su desaparición.`,
      respuesta: `Ciclo de vida`,
      distractores: [`Obsolescencia planeada`, `Innovación mercadológica`, `Plan de lanzamiento de un producto`],
    },
    {
      pregunta: `¿Cuál de las siguientes opciones no corresponde a una etapa del Ciclo de vida?`,
      respuesta: `Nacimiento`,
      distractores: [`Madurez`, `Declive`, `Introducción`],
    },
    {
      pregunta: `¿Cuál de las siguientes opciones se podría considerar como una Estrategia de la fase de madurez?`,
      respuesta: `Todas son correctas`,
      distractores: [`Modificación en el mercado`, `Modificación en el producto`, `Modificación del programa de marketing`],
    },
    {
      pregunta: `Es la programación de la vida útil de un producto, para que este se vuelva inútil en un periodo de tiempo determinado`,
      respuesta: `Obsolescencia planeada`,
      distractores: [`Innovación mercadológica`, `Plan de lanzamiento de un producto`, `Ciclo de vida`],
    }
  ];