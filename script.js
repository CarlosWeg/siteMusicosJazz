// Fade-in nos elementos ao carregar a página
window.onload = function() {
    const secoes = document.querySelectorAll("section");
    secoes.forEach((section) => {
        section.classList.add("fade-in");
    });
};

// Notificação faixa tocando agora
function mostrarNomeMusica(nomeFaixa) {
    // Evita múltiplas notificações
    if (document.querySelector(".tocando-agora")) return;

    const notificacao = document.createElement("div");
    notificacao.classList.add("tocando-agora");
    notificacao.innerText = `🎶 Tocando Agora: ${nomeFaixa}`;
    document.body.appendChild(notificacao);

    setTimeout(() => notificacao.remove(), 5000);
}

const audioPlayer = document.querySelector(".player");
audioPlayer.addEventListener("play", () => mostrarNomeMusica("So What - Miles Davis"));

// Horário em Nova Orleans
function horarioNovaOrleans() {
    const now = new Date();
    const options = { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit' };
    const time = now.toLocaleTimeString([], options);
    document.getElementById("nova-orleans-horario").innerText = "Horário em Nova Orleans: " + time;
}
setInterval(horarioNovaOrleans, 1000);

// Mudar título do site
const titulos = ["O que é Jazz?", "John Coltrane", "Miles Davis", "Bill Evans", "Kind of Blue"];

function tituloAleatorio() {
    const randomTitulo = titulos[Math.floor(Math.random() * titulos.length)];
    document.title = "Descubra: " + randomTitulo;
}
setInterval(tituloAleatorio, 5000);

// Vinil girando ao tocar música
const vinil = document.querySelector('.album-container img');

audioPlayer.addEventListener('play', () => {
    vinil.classList.add('girando');
});

audioPlayer.addEventListener('pause', () => {
    vinil.classList.remove('girando');
});

audioPlayer.addEventListener('ended', () => {
    vinil.classList.remove('girando');
});

//Transição nome
const nomes = document.querySelectorAll('.nome');
window.addEventListener('scroll', () => {
    nomes.forEach(nome => {
        const rect = nome.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            nome.classList.add('aparecendo');
        }
    });
});