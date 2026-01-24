/* ================================
   AVENGERS CHARACTER LOGIC
================================ */

function showHero(hero) {

    const name = document.getElementById("hero-name");
    const desc = document.getElementById("hero-desc");
    const info = document.getElementById("hero-info");

    const data = {
        ironman: {
            theme: "linear-gradient(120deg, #b31217, #000)",
            name: "Iron Man",
            desc: "A genius billionaire who fights using advanced armor.",
            details: [
                "Real Name: Tony Stark",
                "Powers: Powered Armor",
                "Weapons: Repulsors, Missiles",
                "Team: Avengers"
            ]
        },
        captain: {
            theme: "linear-gradient(120deg, #1e3c72, #000)",
            name: "Captain America",
            desc: "The super soldier and moral leader of the Avengers.",
            details: [
                "Real Name: Steve Rogers",
                "Powers: Enhanced Strength",
                "Weapon: Vibranium Shield",
                "Team: Avengers"
            ]
        },
        thor: {
            theme: "linear-gradient(120deg, #4b0082, #000)",
            name: "Thor",
            desc: "The God of Thunder from Asgard.",
            details: [
                "Real Name: Thor Odinson",
                "Powers: Lightning, Strength",
                "Weapon: Mjolnir / Stormbreaker",
                "Team: Avengers"
            ]
        },
        hulk: {
            theme: "linear-gradient(120deg, #2e7d32, #000)",
            name: "Hulk",
            desc: "The strongest Avenger powered by rage.",
            details: [
                "Real Name: Bruce Banner",
                "Powers: Super Strength",
                "Weapon: Raw Power",
                "Team: Avengers"
            ]
        },
        widow: {
            theme: "linear-gradient(120deg, #000000, #434343)",
            name: "Black Widow",
            desc: "An elite spy and master combatant.",
            details: [
                "Real Name: Natasha Romanoff",
                "Powers: Combat Skills",
                "Weapons: Batons, Firearms",
                "Team: Avengers"
            ]
        }
    };

    /* EXISTING FUNCTIONALITY (UNCHANGED) */
    document.body.style.background = data[hero].theme;
    name.innerText = data[hero].name;
    desc.innerText = data[hero].desc;

    info.innerHTML = "";
    data[hero].details.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        info.appendChild(li);
    });

    /* DASHBOARD ADD-ON */
    openHeroDashboard(hero, data[hero]);
}

/* ================================
   HERO DASHBOARD MODAL
================================ */

function openHeroDashboard(heroKey, heroData) {

    const modal = document.getElementById("heroModal");
    modal.classList.add("active");

    document.getElementById("modal-name").innerText = heroData.name;
    document.getElementById("modal-title").innerText = heroData.desc;

    const imgSrc = document
        .querySelector(`[onclick="showHero('${heroKey}')"] img`).src;

    document.getElementById("modal-img").src = imgSrc;

    const detailsBox = document.getElementById("modal-details");
    detailsBox.innerHTML = "";

    heroData.details.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "modal-box";
        div.style.animationDelay = `${index * 0.15}s`;
        div.innerText = item;
        detailsBox.appendChild(div);
    });
}

function closeModal() {
    document.getElementById("heroModal").classList.remove("active");
}

/* ================================
   CINEMATIC INTRO (FIXED & SAFE)
================================ */
// Skip intro if already played
if (sessionStorage.getItem("introPlayed") === "true") {
    const intro = document.getElementById("intro-screen");
    intro.style.display = "none";
   
}




window.addEventListener("load", () => {

    const introScreen = document.getElementById("intro-screen");

    const introVideo = document.getElementById("introVideo");
    const logoVideo = document.getElementById("logoVideo");

    const soundBtn = document.getElementById("sound-btn");

    const marvelLogo = document.getElementById("marvel-logo");
    const journeyText = document.getElementById("journey-text");
    const avengersLogo = document.getElementById("avengers-logo");

    // Hide text initially
    marvelLogo.classList.add("hidden");
    journeyText.classList.add("hidden");
    avengersLogo.classList.add("hidden");

    // Enable sound on user click
    soundBtn.addEventListener("click", () => {
        introVideo.muted = false;
        logoVideo.muted = false;
        introVideo.volume = 1;
        logoVideo.volume = 1;
        soundBtn.style.display = "none";
    });

    /* ===== PLAY FIRST VIDEO ===== */
    introVideo.play().catch(() => {});

    introVideo.onended = () => {
        introVideo.style.display = "none";

        /* ===== PLAY SECOND VIDEO ===== */
        logoVideo.style.display = "block";
        logoVideo.play().catch(() => {});
    };

    /* ===== AFTER SECOND VIDEO ===== */
    logoVideo.onended = () => {

        // LET'S START A NEW JOURNEY
        journeyText.classList.remove("hidden");
        journeyText.classList.add("avengers-glow");

        // REMOVE INTRO SCREEN
        setTimeout(() => {
            introScreen.style.opacity = "0";
            setTimeout(() => {
                introScreen.style.display = "none";
            }, 1000);
        }, 4000);
    };
});

function openHero(card, heroKey) {

    const img = card.querySelector("img");

    sessionStorage.setItem("introPlayed", "true");


    // Save selected hero
    sessionStorage.setItem("selectedHero", heroKey);

    // Animate image
    img.style.transition = "0.6s ease";
    img.style.transform = "scale(3)";
    img.style.zIndex = "999";

    // Fade out page
    document.body.style.transition = "0.6s";
    document.body.style.opacity = "0";

    // Navigate after animation
    setTimeout(() => {
        window.location.href = "hero.html";
    }, 600);
}

// Hero themes for background changes
const heroThemes = {
    ironman: "linear-gradient(135deg, #b31217, #8b0000, #000)",
    captain: "linear-gradient(135deg, #1e3c72, #0f2540, #000)",
    thor: "linear-gradient(135deg, #4b0082, #2e004f, #000)",
    hulk: "linear-gradient(135deg, #2e7d32, #1b5e20, #000)",
    widow: "linear-gradient(135deg, #000000, #434343, #1a1a1a)"
};

// Add hover effects for background changes
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const heroKey = card.getAttribute("onclick").match(/'([^']+)'/)[1];

        card.addEventListener("mouseenter", () => {
            document.body.style.background = heroThemes[heroKey];
            document.body.style.transition = "background 0.5s ease";
        });

        card.addEventListener("mouseleave", () => {
            document.body.style.background = "linear-gradient(135deg, #0c0c0c, #1a1a1a, #2a2a2a)";
            document.body.style.transition = "background 0.5s ease";
        });
    });
});
