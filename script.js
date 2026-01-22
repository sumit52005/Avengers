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

    document.body.style.background = data[hero].theme;
    name.innerText = data[hero].name;
    desc.innerText = data[hero].desc;

    info.innerHTML = "";
    data[hero].details.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        info.appendChild(li);
    });
}
