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

    // Disegna il testo delle sezioni sopra il canvas
    ctx.fillStyle = '#FFF'; // Colore del testo bianco
    ctx.font = '20px Arial';
    ctx.fillText("Benvenuti nel Portfolio di Giuseppe Sansone", 20, 50);
    ctx.fillText("Ciao! Sono Giuseppe", 20, 100);
    ctx.fillText("Sviluppatore appassionato di progetti.", 20, 130);
    ctx.fillText("Progetti GitHub:", 20, 170);
    ctx.fillText("1. Capstone", 20, 200);
    ctx.fillText("2. pokemorra", 20, 220);
    ctx.fillText("3. Progetto 3", 20, 240);
    ctx.fillText("4. B&B", 20, 260);
    ctx.fillText("5. Epicode page for Mobile", 20, 280);
}

setInterval(draw, 33); // Aggiorna il disegno ogni 33 ms

// Riprogramma il canvas quando la finestra cambia dimensione
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
