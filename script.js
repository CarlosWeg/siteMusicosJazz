function mostrarTocandoAgora(nomeFaixa) {
    const notification = document.createElement("div");
    notification.classList.add("tocando-agora");
    notification.innerText = `🎶 Tocando Agora: ${nomeFaixa}`;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 5000);
}

const audioPlayer = document.querySelector(".player");
audioPlayer.addEventListener("play", () => mostrarTocandoAgora("So What - Miles Davis"));



function updateNewOrleansTime() {
    const now = new Date();
    const options = { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit' };
    const time = now.toLocaleTimeString([], options);
    document.getElementById("new-orleans-time").innerText = "Horário em Nova Orleans: " + time;
}

setInterval(updateNewOrleansTime, 1000);
