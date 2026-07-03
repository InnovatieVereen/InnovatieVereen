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
        paragraphs: [
            "Een exoskelet kan zorgmedewerkers helpen bij fysiek zwaar werk, zoals tillen en ondersteunen van cliënten. Het apparaat ondersteunt het lichaam en vermindert de belasting van rug, schouders en knieën. Dat kan helpen om klachten te voorkomen en het werk prettiger en langer vol te houden.",
            "Bij Vereen werken we op dit moment nog niet met een exoskelet. Wel kijken we met interesse naar deze ontwikkeling en wat het kan betekenen voor de zorg. In het filmpje zie je dat zorginstelling Sevagram een pilot doet met een exoskelet. Tijdens deze pilot onderzoeken zij hoe het exoskelet in de praktijk werkt en hoe medewerkers de ondersteuning ervaren tijdens hun dagelijkse werkzaamheden."
        ]
    },
    {
        id: "hume",
        title: "HUME",
        subtitle: "Slimme sok die stressniveau meet",
        image: "images/Hume.jpg",
        video: "https://www.youtube-nocookie.com/embed/q4m5Dw85XBk",
        paragraphs: [
            "HUME kan zorgmedewerkers helpen om beter inzicht te krijgen in het welzijn en de beweging van cliënten. De Hume is een innovatieve, slimme sok die stressniveaus van mensen meet, vertaalt en weergeeft. De sok meet een combinatie van beweging, hartslag en zweetproductie. Deze data worden vertaald naar een overzichtelijke app. De app stuurt vervolgens een waarschuwing aan de zorg zodra opbouwende stress wordt gemeten. Dit 'Early-Warning systeem' zorgt ervoor dat cliënten eerder geholpen kunnen worden.",
            "Bij Vereen werken we op dit moment nog niet met de HUME sok. Wel volgen we deze ontwikkeling met interesse en kijken we naar wat het kan betekenen voor de zorg. Bekijk het filmpje voor meer informatie over de HUME Sok!"
        ]
    },
    {
        id: "vendlet",
        title: "Vendlet Bed",
        subtitle: "Makkelijker cliënten draaien in bed",
        image: "images/Vendlet.jpg",
        video: "https://www.youtube-nocookie.com/embed/MoOVYIVfsOI",
        paragraphs: [
            "Een Vendlet bed kan zorgmedewerkers ondersteunen bij het verplaatsen en draaien van cliënten in bed. Het systeem helpt om cliënten op een veilige en comfortabele manier te positioneren, waardoor de fysieke belasting voor zorgmedewerkers vermindert. Dit kan helpen om klachten aan rug en schouders te voorkomen en maakt het werk minder zwaar, terwijl cliënten meer comfort en zelfstandigheid kunnen ervaren.",
            "Bij Vereen werken al enkele locaties met Vendlet bedden. Het innovatieteam voerde een pilot uit bij het Zonnehuis en de Kivietsbloem. Daaruit blijkt dat het Vendlet bed effectief is bij het omdraaien van cliënten die vanwege hun gewicht of lichamelijke beperkingen normaal gesproken lastig om te draaien zijn. In het filmpje zie je hoe het Vendlet bed werkt.",
            "Ken jij een cliënt die mogelijk baat heeft bij een Vendlet bed? Bespreek dit dan eerst met de ergotherapeut!"
        ]
    },
    {
        id: "toiletbril",
        title: "Slimme Toiletbril",
        subtitle: "Toiletbril die gezondheidsmetingen uitvoert",
        image: "images/slimme-WC-bril.jpg",
        video: "https://www.youtube-nocookie.com/embed/QL6q-ff9gqE",
        paragraphs: [
            "Een slimme toiletbril van OnePlanet kan zorgmedewerkers ondersteunen door automatisch gezondheidsgegevens van cliënten te meten tijdens het toiletbezoek. Denk hierbij aan waarden zoals hartslag, temperatuur en andere signalen die iets zeggen over de gezondheid. Dit kan helpen om veranderingen vroegtijdig te signaleren, waardoor sneller passende zorg ingezet kan worden en problemen mogelijk worden voorkomen.",
            "Op dit moment is de slimme toiletbril nog in ontwikkeling en daardoor nog niet beschikbaar om in te zetten bij Vereen. Wel volgen we deze ontwikkeling met interesse en onderzoeken we mogelijkheden om de toiletbril op een van onze locaties te testen. In het filmpje zie je hoe de Slimme Toiletbril de Klokhuis Wetenschapsprijs wint en vertellen de onderzoekers over hoe de uitvinding werkt."
        ]
    },
    {
        id: "attendi",
        title: "Attendi App",
        subtitle: "Gesprekken direct omgezet naar rapportages",
        image: "images/attendi.jpg",
        video: "https://www.youtube-nocookie.com/embed/Rl8ZAp67KDA",
        paragraphs: [
            "De Attendi App maakt automatisch samenvattingen van ieder zorggesprek. Zo besparen zorgprofessionals tijd, geven ze hun volle aandacht aan de cliënt en ontstaat een rijker cliëntdossier. Nadat het gesprek door Attendi is verwerkt in het gewenste template, kunnen zorgmedewerkers de tekst nog aanpassen en aanvullen waar nodig. Daarna wordt de rapportage direct toegevoegd aan het ECD.",
            "Op dit moment wordt de Attendi app door de behandelaren van Vereen getest. Wanneer deze pilot succesvol is, gaat het innovatieteam onderzoeken of de Attendi app ook ingezet kan worden tijdens andere momenten zoals zorgrondes of intakegesprekken. In het filmpje vertellen buurtzorgmedewerkers over hun ervaringen met de app en hoe de app werkt."
        ]
    },
    {
        id: "ontvangstrobot",
        title: "Ontvangstrobot",
        subtitle: "Robot die bezoekers ontvangt en wegwijs maakt",
        image: "images/ontvangstrobot.jpg",
        video: "https://www.youtube-nocookie.com/embed/yZ1AdaTWoNk",
        paragraphs: [
            "Deze robot van Zorabots kan zorgmedewerkers ondersteunen als ontvangstrobot op zorglocaties. De robot kan bezoekers welkom heten, informatie geven en de weg wijzen binnen de locatie. Dit kan helpen om de werkdruk bij de zorgmedewerkers te verlagen en zorgt voor een gastvrije ontvangst voor bezoekers en cliënten.",
            "Bij Vereen wordt de robot vanaf juli getest bij de Kievitsbloem en het Centraal Bureau. Tijdens deze pilot onderzoeken we hoe de robot in de praktijk werkt en hoe cliënten, bezoekers en medewerkers de inzet ervaren in hun dagelijkse omgeving.",
            "In het filmpje zie je hoe de robot al wordt ingezet in een glasbedrijf om bezoekers te ontvangen."
        ]
    },
    {
        id: "schrobzuigmachine",
        title: "Robot Schrob/Zuigmachine",
        subtitle: "Vloeren efficiënter gereinigd met robot",
        image: "images/schrobzuigmachine.jpg",
        video: "",
        paragraphs: [
            "Deze robot schrob/zuigmachine kan schoonmaakmedewerkers ondersteunen bij het schoonmaken van vloeren. De machine reinigt zelfstandig en zorgt voor een constante en efficiënte hygiëne in de gangen van zorglocaties. Dit kan helpen om tijd te besparen, de werkdruk te verlagen en bij te dragen aan een schone leefomgeving voor cliënten en medewerkers.",
            "Bij Vereen is de robot schrob/zuigmachine twee weken lang getest bij de Havezate. Uit deze pilot bleek dat de machine bijdraagt aan schonere wandelgangen, maar dat hij in volle ruimtes zoals het restaurant niet altijd overal goed bij kan. We gaan binnenkort verder met een langere pilot van een jaar om te bepalen of we de machine bij heel Vereen willen gaan inzetten."
        ]
    }
];

let currentIndex = 0;
let idleTimer;

const container = document.getElementById("sections");
const homeBtn = document.querySelector(".home-btn");

// ======================================
// PAGINA'S GENEREREN
// ======================================

items.forEach((item, index) => {

    const section = document.createElement("section");

    section.classList.add("section");
    section.id = item.id;

    const videoHtml = item.video
        ? `<iframe src="${item.video}" title="Video over ${item.title}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen loading="lazy"></iframe>`
        : "";

    const paragraphsHtml = item.paragraphs.map(p => `<p>${p}</p>`).join("");

    const dotsHtml = items
        .map((_, i) => `<button class="dot${i === index ? " active" : ""}" onclick="openSection(${i})"
                aria-label="Ga naar ${items[i].title}"></button>`)
        .join("");

    section.innerHTML = `
        <button class="nav-arrow left" onclick="previousSection()" aria-label="Vorige thema">❮</button>
        <button class="nav-arrow right" onclick="nextSection()" aria-label="Volgende thema">❯</button>

        <div class="section-header">
            <h2>${item.title}</h2>
            <p class="subtitle">${item.subtitle}</p>
        </div>

        <div class="content">

            <div class="media">
                <div class="media-frame">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                ${videoHtml}
            </div>

            <div class="text">
                ${paragraphsHtml}
            </div>

        </div>

        <div class="section-counter">
            <span>${index + 1} van ${items.length}</span>
            <div class="section-dots">
                ${dotsHtml}
            </div>
        </div>
    `;

    container.appendChild(section);
});

const sections = document.querySelectorAll(".section");

// ======================================
// NAVIGATIE
// ======================================

function openSection(index) {

    currentIndex = index;

    document.getElementById("home").style.display = "none";
    homeBtn.classList.add("visible");

    sections.forEach(section => section.classList.remove("active"));
    sections[index].classList.add("active");

    updateDots();

    window.location.hash = items[index].id;
    window.scrollTo(0, 0);

    resetIdleTimer();
}

function showHome() {

    document.getElementById("home").style.display = "flex";
    homeBtn.classList.remove("visible");

    sections.forEach(section => section.classList.remove("active"));

    history.replaceState(null, "", window.location.pathname);

    resetIdleTimer();
}

function nextSection() {
    currentIndex = (currentIndex + 1) % items.length;
    openSection(currentIndex);
}

function previousSection() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    openSection(currentIndex);
}

function updateDots() {
    document.querySelectorAll(".section-dots").forEach(dots => {
        dots.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    });
}

// ======================================
// HASH SUPPORT (directe link naar thema)
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

    const detailOpen = document.querySelector(".section.active");

    if (!detailOpen) return;

    if (event.key === "ArrowRight") nextSection();
    if (event.key === "ArrowLeft") previousSection();
    if (event.key === "Escape" || event.key === "Home") showHome();
});

// ======================================
// SWIPE SUPPORT
// ======================================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener("touchend", (event) => {

    if (!document.querySelector(".section.active")) return;

    touchEndX = event.changedTouches[0].screenX;

    const distance = touchEndX - touchStartX;

    if (distance > 100) previousSection();
    if (distance < -100) nextSection();
}, { passive: true });

// ======================================
// IDLE TIMER (terug naar home na 10 min)
// ======================================

function resetIdleTimer() {

    clearTimeout(idleTimer);

    idleTimer = setTimeout(() => {
        showHome();
    }, 600000); // 10 minuten
}

["click", "mousemove", "touchstart", "keydown", "wheel"].forEach(eventName => {
    document.addEventListener(eventName, resetIdleTimer, { passive: true });
});

resetIdleTimer();

// ======================================
// FULLSCREEN (dubbelklik linksboven)
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
