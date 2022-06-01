function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Qué es un prosumer?",
      respuesta: "Un consumidor proactivo",
      distractores: ["Una persona que consume productos y servicios", "Un consumidor de la competencia", "Un consumidor que desea investigar más antes de comprar"],
    },
    {
      pregunta: "¿Qué es una estrategia?",
      respuesta: "programas generales de acción para poner en práctica una misión",
      distractores: ["método que se sigue para conseguir un fin", "es un conjunto de procedimientos y recursos", "todas las anteriores"],
    },
    {
      pregunta: "¿Qué es una meta?",
      respuesta: "La meta es a donde quieres llegar",
      distractores: ["La meta es un parámetro que se evalúa", "Resultado o sumatoria de los esfuerzos de una empresa", "Es la manera como una empresa intenta aplicar una estrategia"],
    },
    {
      pregunta: `¿Cómo se divide la ventaja competitiva?`,
      respuesta: `Liderazgo en bajo costo, diferenciación, especialización en costos bajos, especialización en diferenciación`,
      distractores: [`Liderazgo en bajo costo, diferenciación, servicio al cliente, especialización en costos bajos`, `Liderazgo en bajo costo, diferenciación, programación, especialización en diferenciación`, `Mejor control del plan empresarial, diferenciación, servicio al cliente, especialización en costos bajos`],
    },
    {
      pregunta: `¿Qué estrategia tiene un alto valor para el cliente hoy en día?`,
      respuesta: `Estrategia de customizar`,
      distractores: [`Estrategia de servicio al cliente`, `Estrategia de medios promocionales`, `Estrategia de precio`],
    },
    {
      pregunta: `Selecciona una función de la dirección de mercadotecnia`,
      respuesta: `Delegar responsabilidades`,
      distractores: [`Aclarar las dudas del personal`, `Aumentar el engagement de la marca`, `Mejorar la imagen pública`],
    },
    {
      pregunta: `¿Cuándo se da la organización de mercadotecnia por funciones?`,
      respuesta: `Cuando hay 1 o varias tareas especializadas`,
      distractores: [`Cuando hay clientes con características y necesidades diferentes`, `Cuando hay una gran variedad de productos`, `Cuando no se exige mucha calidad`],
    },
    {
      pregunta: `¿Cuál no es una característica de la organización de mercadotecnia por producto?`,
      respuesta: `Son empresas que trabajan las 24 horas al día`,
      distractores: [`Gran variedad de productos`, `Organización por grupo de productos`, `Optimiza la utilización de los recursos`],
    },
    {
      pregunta: `¿Cuál es un ejemplo de organización de mercadotecnia por tiempos?`,
      respuesta: `OXXO`,
      distractores: [`Walmart`, `Steve Madden`, `Burger King`],
    },
    {
      pregunta: `¿Qué es el proceso de administración estratégica?`,
      respuesta: `Proceso de evaluación sistemática de una empresa`,
      distractores: [`Esquema sobre las instrucciones y procesos que se realizarán para lograr objetivos`, `La formulación del estado futuro deseado para una organización`, `Es el que define objetivos a largo plazo`],
    },
    {
      pregunta: `¿Cuál sería un objetivo a largo plazo?`,
      respuesta: `Aumento de conocimiento de marca y generar clientes de calidad`,
      distractores: [`Aumento de conocimiento de marca e inversión en promocionales`, `Capacitar al personal de la empresa`, `Incluir marketing de influencers en la campaña`],
    },
    {
      pregunta: `¿A qué hacen referencia las 4cs?`,
      respuesta: `Coherencia, consistencia, continuidad, complementariedad`,
      distractores: [`Coherencia. consistencia, comunicación, continuidad`, `Conveniencia, cliente, coherencia, consistencia`, `Continuidad, coherencia, complementariedad, cliente `],
    }
  ];