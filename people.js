// Importo le funzioni
const firstFunction = require(`./names.js`);
const secondFunction = require(`./hobbies.js`);

// Utilizzo le funzioni
const getInfo = () => {
    return {
        person : firstFunction (`Andrea`, `Sgura`),
        hobbyList : secondFunction (`VideoGames`, `Film`, `Serie tv`)
    };
};

console.log(getInfo);