function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Cómo define Kotler al plan de mercadotecnia?",
      respuesta: "Documento escrito que resume lo que el especialista de marketing ha aprendido sobre el mercado",
      distractores: ["Planteamientos comerciales con los que los administradores hacen crecer el negocio", "Son los atributos, conocimientos, recursos, de los que dispone la organización", "Es una herramienta de gestión estratégica que permite analizar y crear modelos de negocio."],
    },
    {
      pregunta: "¿Cuáles son los 2 niveles del plan de mercadotecnia?",
      respuesta: "Estratégico, táctico",
      distractores: ["Estratégico, planificado", "Táctico, organizado", "Táctico, medible"],
    },
    {
      pregunta: `¿Cuál no es un objetivo de un plan de mercadotecnia?`,
      respuesta: `Penetración de mercado`,
      distractores: [`Posicionamiento de marca`, `Aumento de ventas`, `Lanzamiento de nuevos productos`],
    },
    {
      pregunta: `¿Qué es la penetración de mercado?`,
      respuesta: `Crecimiento de una compañía al aumentar las ventas de sus productos, en los segmentos de mercado actuales`,
      distractores: [`Crecimiento de una compañía al aumentar las ventas de sus productos, en segmentos de mercado nuevos`, `Es un porcentaje que corresponde a la relevancia de tu empresa frente a los competidores en cierto mercado`, `Expansión del crecimiento de una empresa a partir de la conquista de nuevos mercados`],
    },
    {
      pregunta: `¿Qué cuadrantes intervienen en la matriz de Ansoff?`,
      respuesta: `Productos y mercados (nuevos y tradicionales)`,
      distractores: [`Tasa de crecimiento y participación del mercado`, `Posición competitiva de la empresa y grado de atractivo del sector`, `Ciclo de vida del negocio y posición competitiva de la empresa`],
    },
    {
      pregunta: `Las dimensiones del portafolio de productos son amplitud, longitud, profundidad y _____`,
      respuesta: `consistencia`,
      distractores: [`ancho`, `densidad`, `concentración`],
    },
    {
      pregunta: `No sólo muestran una situación, sino que recomiendan una dirección a tomar`,
      respuesta: `Matrices direccionales`,
      distractores: [`Análisis situacional`, `Estrategias`, `Análisis interno y externo de la empresa`],
    },
    {
      pregunta: `¿Qué representa el producto vaca en la matriz BCG?`,
      respuesta: `producto maduro, y sirve como fuente sólida de ingresos`,
      distractores: [`producto que tiene un elevado crecimiento y proporciona a la empresa una elevada participación`, `ofrece una perspectiva de crecimiento elevado, pero una cuota de mercado baja`, `genera pocos ingresos, tienen una escasa posición en el mercado y bajo crecimiento.`],
    },
    {
      pregunta: `¿Cuál es la función de la matriz General Electric?`,
      respuesta: `evaluar las unidades de negocio que componen una empresa`,
      distractores: [`analizar el valor y la capacidad de ventas que tienen las empresas.`, `analizar el potencial de las unidades del negocio para la asignación de recursos`, `conocer el nivel de atractivo del mercado`],
    },
    {
      pregunta: `¿Qué dimensiones utiliza la matriz Shell?`,
      respuesta: `perspectiva del sector y capacidad competitiva`,
      distractores: [`posición competitiva y atractivo del mercado de la industria`, `5 niveles de rentabilidad `, `madurez de la industria y posición competitiva donde está la empresa`],
    },
    {
      pregunta: `¿Cuáles son los 5 niveles dentro de la matriz RMG?`,
      respuesta: `cumbre, valle, semilla pared y barranco`,
      distractores: [`cumbre, cresta, valle, semilla y barranco`, `excelencia, cumbre, semilla, valle y barranco`, `excelencia, cresta, valle, semilla y barranco`],
    },
    {
      pregunta: `También conocida como matriz de ciclo de vida empresarial`,
      respuesta: `matriz Arthur D Little`,
      distractores: [`matriz BCG`, `matriz RMG`, `matriz Shell`],
    }
  ];