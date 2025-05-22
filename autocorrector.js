function autocorregir() {
  let texto = document.getElementById("texto").value;

  const correcciones = {
    // Tecnología y educación
    "\\bAI\\b": "Inteligencia Artificial",
    "\\bVR\\b": "Realidad Virtual",
    "\\bAR\\b": "Realidad Aumentada",
    "\\bSTEAM\\b": "Ciencia, Tecnología, Ingeniería, Arte y Matemáticas",
    "\\bSTEM\\b": "Ciencia, Tecnología, Ingeniería y Matemáticas",
    "\\bIoT\\b": "Internet de las Cosas",
    "\\bML\\b": "Aprendizaje Automático",
    "\\bDL\\b": "Aprendizaje Profundo",
    "\\bIT\\b": "Tecnologías de la Información",
    "\\bICT\\b": "Tecnologías de la Información y la Comunicación",
    "\\bCPU\\b": "Unidad Central de Procesamiento",
    "\\bGPU\\b": "Unidad de Procesamiento Gráfico",
    "\\bAPI\\b": "Interfaz de Programación de Aplicaciones",
    "\\bUI\\b": "Interfaz de Usuario",
    "\\bUX\\b": "Experiencia del Usuario",
    "\\bHTML\\b": "Lenguaje de Marcado de Hipertexto",
    "\\bCSS\\b": "Hojas de Estilo en Cascada",
    "\\bJS\\b": "JavaScript",
    "\\bSQL\\b": "Lenguaje de Consulta Estructurada",
    "\\bURL\\b": "Dirección Web",
    "\\bHTTP\\b": "Protocolo de Transferencia de Hipertexto",

    // Lenguaje juvenil y redes sociales
    "\\bXD\\b": "risa o carcajada",
    "\\bLOL\\b": "riendo a carcajadas",
    "\\bOMG\\b": "¡Dios mío!",
    "\\bWTF\\b": "¿Qué demonios?",
    "\\bBRB\\b": "vuelvo enseguida",
    "\\bBTW\\b": "por cierto",
    "\\bTT\\b": "tendencia en redes sociales",
    "\\bDM\\b": "mensaje privado",
    "\\bIG\\b": "Instagram",
    "\\bFB\\b": "Facebook",
    "\\bYT\\b": "YouTube",
    "\\bTikTok\\b": "plataforma de videos cortos",
    "\\bFYP\\b": "Para ti (página principal en TikTok)",
    "\\bNSFW\\b": "contenido no apto para el trabajo",
    "\\bTBT\\b": "jueves de recuerdo",
    "\\bCRINGE\\b": "vergonzoso o incómodo",
    "\\bBAE\\b": "persona querida (novio/a)",
    "\\bBFF\\b": "mejor amigo/a para siempre",
    "\\bAF\\b": "muy (ej: loco AF = muy loco)",
    "\\bFTW\\b": "para ganar / lo mejor",
    "\\bGG\\b": "buen juego (usado al finalizar una partida)",
    "\\bNOOB\\b": "novato sin experiencia",
    "\\bPOV\\b": "punto de vista",
    "\\bOMG\\b": "¡Dios mío!",
    "\\bIDK\\b": "no lo sé",
    "\\bILY\\b": "te quiero",
    "\\bGRWM\\b": "prepárate conmigo",
    "\\bASMR\\b": "sonidos que generan placer sensorial",
    "\\bTLDR\\b": "resumen rápido",
    "\\bIRL\\b": "en la vida real",
    "\\bJK\\b": "es broma",
    "\\bRN\\b": "ahora mismo"
  };

  for (const abreviacion in correcciones) {
    const regex = new RegExp(abreviacion, "gi");
    texto = texto.replace(regex, correcciones[abreviacion]);
  }

  document.getElementById("resultado").innerText = texto;
}
