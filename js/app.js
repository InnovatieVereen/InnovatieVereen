// ======================================
// VEREEN INNOVATIES KIOSK
// ======================================

const items = [
    {
        id: "exoskelet",
        title: "Exoskelet",
        subtitle: "Verminderen van fysieke belasting",
        image: "images/exoskelet.jpg",
        video: "https://www.youtube-nocookie.com/embed/ambHz9EznXw",
        text: `
            Een exoskelet kan zorgmedewerkers helpen bij fysiek zwaar werk,
            zoals tillen en ondersteunen van cliënten. Het apparaat ondersteunt
            het lichaam en vermindert de belasting van rug, schouders en knieën.
        `
    },
    {
        id: "hume",
        title: "HUME",
        subtitle: "Slimme sok die stressniveau meet",
        image: "images/hume.jpg",
        video: "https://www.youtube-nocookie.com/embed/q4m5Dw85XBk",
        text: `
            HUME meet beweging, hartslag en zweetproductie.
            Via een app wordt oplopende stress vroegtijdig zichtbaar gemaakt.
        `
    },
    {
        id: "vendlet",
        title: "Vendlet Bed",
        subtitle: "Makkelijker cliënten draaien in bed",
        image: "images/vendlet.jpg",
        video: "https://www.youtube-nocookie.com/embed/MoOVYIVfsOI",
        text: `
            Het Vendlet systeem helpt zorgmedewerkers cliënten veilig
            en comfortabel te draaien en te positioneren.
        `
    },
    {
        id: "toiletbril",
        title: "Slimme Toiletbril",
        subtitle: "Toiletbril die gezondheidsmetingen uitvoert",
        image: "images/slimme-wc-bril.jpg",
        video: "https://www.youtube-nocookie.com/embed/QL6q-ff9gqE",
        text: `
            De slimme toiletbril kan automatisch gezondheidswaarden
            registreren tijdens het toiletbezoek.
        `
    },
    {
        id: "attendi",
        title: "Attendi App",
        subtitle: "Gesprekken direct omgezet naar rapportages",
        image: "images/attendi.jpg",
        video: "https://www.youtube-nocookie.com/embed/Rl8ZAp67KDA",
        text: `
            Attendi maakt automatisch samenvattingen van zorggesprekken
            en helpt zorgverleners tijd te besparen.
        `
    },
    {
        id: "ontvangstrobot",
        title: "Ontvangstrobot",
        subtitle: "Robot die bezoekers ontvangt en wegwijs maakt",
        image: "images/ontvangstrobot.jpg",
        video: "https://www.youtube-nocookie.com/embed/yZ1AdaTWoNk",
        text: `
            De ontvangstrobot heet bezoekers welkom en geeft
            informatie binnen de locatie.
        `
    },
    {
        id: "schrobzuigmachine",
        title: "Robot Schrob/Zuigmachine",
        subtitle: "Vloeren efficiënter gereinigd",
        image: "images/schrobzuigmachine.jpg",
        video: "",
        text: `
            Deze autonome schoonmaakrobot ondersteunt medewerkers
            bij het reinigen van vloeren.
        `
    }
];

let currentIndex = 0;
let idleTimer;

// ======================================
// PAGINA'S GENEREREN
// ======================================

const container = document.getElementById("sections");

items.forEach((item) => {

    const section = document.createElement("section");

    section.classList.add("section");
    section.id = item.id;

    section.innerHTML = `
        <button class="nav-arrow left" onclick="previousSection()">❮</button>
        <button class="nav-arrow right" onclick="nextSection()">❯</button>

        <h2>${item.title}</h2>
        <p class="subtitle">${item.subtitle}</p>

        <div class="content">

            <div>

                <img src="${item.image}" alt="${item.title}">

                ${
                    item.video
                    ? `
                        <iframe
                            src="${item.video}"
                            title="${item.title}"
                            allowfullscreen>
                        </iframe>
                    `
                    : ""
                }

            </div>

            <div class="text">
                ${item.text}
            </div>

        </div>
    `;

    container.appendChild(section);
});

// ======================================
// NAVIGATIE
// ======================================

function openSection(index) {

    currentIndex = index;

    document.getElementById("home").style.display = "none";

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.querySelectorAll(".section")[index]
        .classList.add("active");

    window.location.hash = items[index].id;

    resetIdleTimer();
}

function showHome() {

    document.getElementById("home").style.display = "block";

    document.querySelectorAll(".section")
        .forEach(section => {
            section.classList.remove("active");
        });

    history.replaceState(
        null,
        null,
        window.location.pathname
    );

    resetIdleTimer();
}

function nextSection() {

    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    openSection(currentIndex);
}

function previousSection() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    openSection(currentIndex);
}

// ======================================
// HASH SUPPORT
// ======================================

function loadHash() {

    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const index = items.findIndex(item => item.id === hash);

    if (index >= 0) {
        openSection(index);
    }
}

window.addEventListener("load", loadHash);

// ======================================
// KEYBOARD SUPPORT
// ======================================

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        nextSection();
    }

    if (event.key === "ArrowLeft") {
        previousSection();
    }

    if (event.key === "Home") {
        showHome();
    }

});

// ======================================
// SWIPE SUPPORT
// ======================================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {

    touchEndX = event.changedTouches[0].screenX;

    const distance = touchEndX - touchStartX;

    if (distance > 100) {
        previousSection();
    }

    if (distance < -100) {
        nextSection();
    }
});

// ======================================
// IDLE TIMER
// ======================================

function resetIdleTimer() {

    clearTimeout(idleTimer);

    idleTimer = setTimeout(() => {

        showHome();

    }, 600000); // 10 minuten
}

[
    "click",
    "mousemove",
    "touchstart",
    "keydown",
    "wheel"
].forEach(eventName => {

    document.addEventListener(
        eventName,
        resetIdleTimer,
        { passive: true }
    );

});

resetIdleTimer();

// ======================================
// FULLSCREEN
// ======================================

function requestFullscreen() {

    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
}

let tapCount = 0;

document.addEventListener("click", (event) => {

    if (event.clientX < 100 && event.clientY < 100) {

        tapCount++;

        setTimeout(() => {
            tapCount = 0;
        }, 1000);

        if (tapCount === 2) {

            requestFullscreen();
            tapCount = 0;

        }
    }
});