const messages = [
  "Te amo mucho",
  "Gracias por estar",
  "Mi persona favorita",
  "Por siempre juntos",
  "Tú y yo, siempre",
  "Tu sonrisa brilla",
  "Eres lo mejor",
  "Contigo, todo es magia",
  "Pienso en ti",
  "Mi corazón es tuyo",
  "Feliz cumple, amor",
  "Aunque lejos, contigo",
  "Celebro tu vida y amor",
  "Tu recuerdo abraza",
  "Inolvidable y única",
  "Mi gran amor",
  "Siempre te extraño",
  "Deseo: estar contigo",
  "Gracias por lo vivido",
  "Aún creo en nosotros",
  "Siempre será especial",
  "Mi favorita, siempre",
  "Eres mi pensamiento",
  "Amor sin distancia",
  "No me rindo",
  "Mi ‘y si’ favorito",
  "Que seas feliz hoy",
  "Eres mi historia",
  "Amor sin fecha",
  "Aquí estaré",
  "Mi alma te extraña",
  "Tú me completas",
  "Siempre en mi mente",
  "Todo me recuerda a ti",
  "Tú vales todo",
  "Te llevo en mí",
  "Nuestro amor vive",
  "Te pienso diario",
  "No te olvido",
  "Sigo sintiéndote",
  "Eres mi paz",
  "Lo eres todo",
  "Contigo aprendí amar",
  "Fuiste mi hogar",
  "Me haces falta",
  "Tú eres mi porqué",
  "Nunca te solté",
  "Aún te espero",
  "Nos volveremos a ver",
  "Nunca fue casualidad",
  "Siempre tú"
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    // Espera a que el bubble tenga tamaño para calcular la posición
    requestAnimationFrame(() => {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const bubbleWidth = bubble.offsetWidth;
        const bubbleHeight = bubble.offsetHeight;

        // Calcula una posición aleatoria segura
        const left = Math.random() * (containerWidth - bubbleWidth);
        const top = Math.random() * (containerHeight - bubbleHeight);

        bubble.style.left = `${Math.max(0, left)}px`;
        bubble.style.top = `${Math.max(0, top)}px`;
    });

    // Elimina la burbuja solo cuando termine la animación
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Crea una burbuja cada 500ms
setInterval(createTextBubble, 600);

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 600);

window.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('bg-music');
    const startBtn = document.getElementById('start-btn');
    let bubbleInterval;

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            startScreen.style.display = 'none';
            mainContent.style.display = 'block';
            audio.play();
            // Empieza a crear burbujas solo después de iniciar
            bubbleInterval = setInterval(createTextBubble, 800);
        });
    }
});