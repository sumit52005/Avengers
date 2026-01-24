const heroes = {
    ironman: {
        name: "Iron Man",
        title: "Genius Billionaire Inventor",
        image: "images/ironman.png",
        details: [
            "Real Name: Tony Stark",
            "Armor: Nano-Tech Suit",
            "Weapons: Repulsors, Missiles",
            "Affiliation: Avengers",
            "Quote: I am Iron Man."
        ]
    },
    captain: {
        name: "Captain America",
        title: "The First Avenger",
        image: "images/caps.png",
        details: [
            "Real Name: Steve Rogers",
            "Weapon: Vibranium Shield",
            "Strength: Enhanced Human",
            "Affiliation: Avengers",
            "Quote: I can do this all day."
        ]
    },
    thor: {
        name: "Thor",
        title: "God of Thunder",
        image: "images/thor.png",
        details: [
            "Real Name: Thor Odinson",
            "Powers: Lightning, Super Strength",
            "Weapon: Mjolnir / Stormbreaker",
            "Affiliation: Avengers",
            "Quote: Bring me Thanos!"
        ]
    },
    hulk: {
        name: "Hulk",
        title: "The Strongest Avenger",
        image: "images/hulk.png",
        details: [
            "Real Name: Bruce Banner",
            "Powers: Super Strength, Regeneration",
            "Weapon: Raw Power",
            "Affiliation: Avengers",
            "Quote: Hulk smash!"
        ]
    },
    widow: {
        name: "Black Widow",
        title: "Elite Spy and Assassin",
        image: "images/blackwidow.png",
        details: [
            "Real Name: Natasha Romanoff",
            "Powers: Combat Skills, Agility",
            "Weapons: Batons, Firearms",
            "Affiliation: Avengers",
            "Quote: I don't have friends, I have one."
        ]
    }
};

const heroKey = sessionStorage.getItem("selectedHero");
const hero = heroes[heroKey];

document.getElementById("heroImg").src = hero.image;
document.getElementById("heroName").innerText = hero.name;
document.getElementById("heroTitle").innerText = hero.title;

const detailsBox = document.getElementById("heroDetails");
hero.details.forEach(item => {
    const p = document.createElement("p");
    p.innerText = item;
    detailsBox.appendChild(p);
});

function goBack() {
    window.location.href = "index.html";
}
