let power = 100;
let hour = 0;
let isMaskOn = false;
let animatronicPresent = false;

const powerEl = document.getElementById('power');
const hourEl = document.getElementById('hour');
const office = document.getElementById('office');
const robot = document.getElementById('animatronic');

// Botão de Máscara
document.getElementById('mask-btn').addEventListener('touchstart', () => {
    isMaskOn = !isMaskOn;
    office.style.filter = isMaskOn ? "sepia(1) brightness(0.5)" : "none";
    document.getElementById('mask-btn').innerText = isMaskOn ? "TIRAR MÁSCARA" : "POR MÁSCARA";
});

// Ciclo da Hora
setInterval(() => {
    if (hour < 6) {
        hour++;
        hourEl.innerText = hour;
        if (hour === 6) alert("Você sobreviveu!");
    }
}, 60000); // 1 minuto real = 1 hora no jogo

// Lógica do Robô (IA Simples)
setInterval(() => {
    if (!animatronicPresent && Math.random() > 0.7) {
        aparecerRobo();
    }
}, 5000);

function aparecerRobo() {
    animatronicPresent = true;
    robot.classList.remove('hidden');
    
    // Você tem 3 segundos para reagir
    setTimeout(() => {
        if (!isMaskOn) {
            alert("Jumpscare! Fim de jogo.");
            location.reload();
        } else {
            // Robô vai embora
            animatronicPresent = false;
            robot.classList.add('hidden');
        }
    }, 3000);
}
