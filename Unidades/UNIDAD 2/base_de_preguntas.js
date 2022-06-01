function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Cuál no es un ejemplo de modelo de planeación?",
      respuesta: "Matriz BCG",
      distractores: ["Análisis FODA", "Análisis PEST", "Blue Ocean Strategy"],
    },
    {
      pregunta: "¿Cuál es un beneficio de la planificación estratégica?",
      respuesta: "Controlar y evaluar fácilmente",
      distractores: ["Estimular a los clientes a la recompra", "Conseguir nuevos proveedores", "Todas las anteriores"],
    },
    {
      pregunta: `Una ________ apunta a la imagen que la empresa quiere transmitir a futuro`,
      respuesta: `visión`,
      distractores: [`misión`, `meta`, `objetivo`],
    },
    {
      pregunta: `Una ________ es un enunciado donde la empresa comunica sus objetivos y filosofía`,
      respuesta: `misión`,
      distractores: [`visión`, `meta`, `objetivo`],
    },
    {
      pregunta: `¿Cuál es la principal diferencia entre plan de negocio y modelo de negocio`,
      respuesta: `El modelo de negocio es como la empresa captura valor y el plan es cómo funcionará la idea`,
      distractores: [`El plan de negocio es como la empresa captura valor y el modelo es cómo funcionará la idea`, `El modelo de negocio provee los detalles del mismo`, `El plan de negocio identifica lo que los clientes valoran`],
    },
    {
      pregunta: `Las oportunidades son aquellas fuerzas de carácter _______que representan elementos de crecimiento para la empresa.`,
      respuesta: `externo`,
      distractores: [`interno`, `interno y externo`, `ninguna de las anteriores`],
    },
    {
      pregunta: `¿Cuáles son las variables que intervienen en el análisis PESTEL?`,
      respuesta: `políticas, económicas, sociales, tecnológicas, ecológicas, legales`,
      distractores: [`políticas, económicas, sociales, materiales, ecológicas, legales`, `políticas, económicas, sociales, recursos humanos, ecológicas, legales`, `únicamente políticas, económicas y sociales`],
    },
    {
      pregunta: `¿Qué criterios debe tener la formulación de una meta?`,
      respuesta: `medibles, específicas, delimitadas, realistas y superables`,
      distractores: [`medibles, específicas y realistas`, `medibles, ambiciosas y específicas`, `medibles, alcanzables, delimitadas y superables`],
    },
    {
      pregunta: `¿Cuáles son los 2 tipos de ventajas competitivas?`,
      respuesta: `ventaja comparativa y ventaja diferencial`,
      distractores: [`ventaja en costos y ventaja de especialización`, `ventaja de exclusividad y ventaja comparativa`, `ventaja diferencial y ventaja de costos`],
    },
    {
      pregunta: `Los niveles de rentabilidad se dan por`,
      respuesta: `todas las anteriores`,
      distractores: [`el valor que los clientes asignan al producto`, `el precio que la empresa fija`, `los costos de creación de los productos`],
    },
    {
      pregunta: `¿Cuál es el orden de las preguntas que se realiza una empresa cuando está en crecimiento?`,
      respuesta: `Situación actual, a dónde quiere llegar y cómo llegará`,
      distractores: [`A dónde quiere llegar, situación actual y cómo llegará`, `A dónde quiere llegar, cómo llegará y situación actual`, `Situación actual, cómo llegará y a dónde quiere llegar`],
    },
    {
      pregunta: `¿Cuál es la primera prueba que se aplica para saber si una estrategia es ganadora?`,
      respuesta: `Prueba de ajuste`,
      distractores: [`Prueba del desempeño`, `Prueba de la ventaja competitiva`, `Prueba de satisfacción`],
    }
  ];