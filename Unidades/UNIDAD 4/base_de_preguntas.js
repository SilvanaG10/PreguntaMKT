function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Cuáles son los elementos esenciales de un juego?",
      respuesta: "Todas las anteriores",
      distractores: ["Información y estrategias", "Jugadores y acción", "Recompensa y resultados"],
    },
    {
      pregunta: "Información en la cada jugador es totalmente consciente de las reglas del juego y de las funciones de utilidad de cada uno de los jugadores",
      respuesta: "Información completa",
      distractores: ["Información incompleta", "Información perfecta", "Información imperfecta"],
    },
    {
      pregunta: `Información que aparece cuando las decisiones tienen que hacerse simultáneamente, y los jugadores necesitan analizar todos los posibles resultados a la hora de tomar una decisión.`,
      respuesta: `Información imperfecta`,
      distractores: [`Información incompleta`, `Información perfecta`, `Información completa`],
    },
    {
      pregunta: `Información que también es conocida como información asimétrica`,
      respuesta: `Información incompleta`,
      distractores: [`Información perfecta`, `Información completa`, `Información imperfecta`],
    },
    {
      pregunta: `¿Cuál es la estrategia que es considerada como la peor de todas las alternativas posibles a escoger ya que está lejos de poderse alcanzar con ella la máxima utilidad?`,
      respuesta: `Estrategia dominada`,
      distractores: [`Estrategia pura`, `Estrategia mixta`, `Estrategia dominante`],
    },
    {
      pregunta: `¿Cuál es la estrategia que siempre proporciona una mayor utilidad a un jugador, independientemente de la estrategia del otro jugador?`,
      respuesta: `Estrategia estrictamente dominada`,
      distractores: [`Estrategia mixta`, `Estrategia pura`, `Estrategia débilmente dominante`],
    },
    {
      pregunta: `¿Cuál es el juego en el cual dos o más participantes aúnan todas sus fuerzas en la consecución de un fin común?`,
      respuesta: `Juego cooperativo`,
      distractores: [`Juego de suma cero`, `Juego no cooperativo`, `Juego ordinario`],
    },
    {
      pregunta: `¿Cuál es el juego en el que las ganancias de un jugador se equilibran con las pérdidas de otro?`,
      respuesta: `Juego de suma cero`,
      distractores: [`Juego cooperativo`, `Juego no cooperativo`, `Juego ordinario`],
    },
    {
      pregunta: `¿Cuál es la estrategia que muestra el escenario de cada uno de los conjuntos de información posibles y convenientes de cada individuo con respecto a una acción determinada?`,
      respuesta: `Estrategia pura`,
      distractores: [`Estrategia dominante`, `Estrategia débilmente dominante`, `Estrategia mixta`],
    },
    {
      pregunta: `Se define como el conjunto de acciones a tomar en cada momento del juego dada la información disponible`,
      respuesta: `Estrategias`,
      distractores: [`Resultado`, `Recompensa`, `Información`],
    },
    {
      pregunta: `Permite tomar decisiones basadas en una estrategia de equilibrio; pero se trata de una teoría extensa que abarca todas las posibles estrategias para cualquier disciplina`,
      respuesta: `Teoría de juegos`,
      distractores: [`Juego de suma cero`, `Juego dinámico`, `Equilibrio de Nash`],
    },
    {
      pregunta: `Situación en donde los jugadores no tienen ningún incentivo a cambiar su estrategia tomando en cuenta las decisiones de sus oponentes.`,
      respuesta: `Equilibrio de Nash`,
      distractores: [`Dilema del prisionero`, `Juego de suma cero`, `Todas las anteriores`],
    }
  ];