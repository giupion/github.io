const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Imposta la dimensione del canvas alla finestra
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Lettere e dimensione font
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;  // Aumenta la dimensione del font
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(0);  // Iniziamo dall'alto (y=0)

// Funzione per disegnare la pioggia Matrix
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Sfondo trasparente per dissolvenza
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0'; // Colore verde per i caratteri
    ctx.font = fontSize + 'px monospace'; // Font monospace

    drops.forEach((drop, index) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, index * fontSize, drop * fontSize); // Posiziona il testo
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;  // Reset del carattere una volta fuori dallo schermo
        }
        drops[index]++;
    });
}

// Imposta un intervallo per eseguire il disegno continuamente
setInterval(draw, 33); // Aggiorna il disegno ogni 33 ms

// Aggiusta la dimensione del canvas quando la finestra cambia dimensione
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
