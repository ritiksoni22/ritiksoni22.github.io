const glowFunc = (ev) => {
    document.querySelectorAll(".glow-on-mouse-over").forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", ev.clientX - rect.left);
        card.style.setProperty("--y", ev.clientY - rect.top);
    });
}

document.querySelector("#projects").addEventListener("pointermove", (ev) => { glowFunc(ev) });
document.querySelector("#experience").addEventListener("pointermove", (ev) => { glowFunc(ev) });