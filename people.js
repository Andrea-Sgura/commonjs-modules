// Importo le funzioni
const getFullName = require(`./names.js`);
const getHobbies = require(`./hobbies.js`);

// Utilizzo le funzioni
const getInfo = () => {
    return {
        fullName: getFullName(`Andrea`, `Sgura`),
        hobbies: getHobbies(`videogames`, `cucina`, `serie tv`)
    };
};

console.log(getInfo());