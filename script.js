const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 10;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Sfondo trasparente
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0'; // Colore del testo
    ctx.font = fontSize + 'px monospace';
    
    drops.forEach((drop, index) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, index * fontSize, drop * fontSize);
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0; // Reset della goccia
        }
        drops[index]++;
    });
}

setInterval(draw, 33); // Aggiorna il disegno ogni 33 ms

// Riprogramma il canvas quando la finestra cambia dimensione
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
