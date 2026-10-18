//DESARROLLA AQUI TUS SOLUCIONES

//EJERCICIO 1
async function getRandomPokemon () {
    const id = Math.floor(Math.random() * 50) +1; 
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("error. Hubo algun problema: "+error.message);
    }
}
//getRandomPokemon().then(data => console.log(data));

//EJERCICIO 2

async function getImageAndName () {
    const pokemon = await getRandomPokemon()
        //console.log(data);
        return `
        Nombre del pokemon: ${pokemon.name}
        URL de la imagen:  ${pokemon.sprites.front_default};
        `
}
//getImageAndName().then(data => console.log(data));

//EJERCICIO 3

function printImageAndName() { //Factorizar
    return getRandomPokemon().then((data) => {   
        return `<section>
                    <img src="${data.sprites.front_default}" >
                    <h1>Nombre del pokemon: ${data.name}</h1>
                </section>`
        })
};
//printImageAndName().then((data) => { document.body.innerHTML += data})

//EJERCICIO 4

async function getRandomDogImage () {
    const urlImgDogRamdom = "https://dog.ceo/api/breeds/image/random"

    const res = await fetch(urlImgDogRamdom);
    const data = await res.json();
    return data.message;
}
//getRandomDogImage().then(data => console.log(data));

//EJERCICIO 5

function getRandomPokemonImage  () {
    return getRandomPokemon().then((data) => {
        return `
        URL de la imagen:  ${data.sprites.front_default};
        `
    })
}
//getRandomPokemonImage().then(data => console.log(data))

//EJERCICIO 6 CAMBIARLO

/*  const urlPug = "https://dog.ceo/api/breed/pug/images";
const urlPikachu = "https://pokeapi.co/api/v2/pokemon/Pikachu"

Promise.all([
    fetch(urlPug).then(res => res.json()),
    fetch(urlPikachu).then(res => res.json()),
]).then(data => console.log(data));  */

//EJERCICIO 7 

async function getRandomCharacter() {
    const id = Math.floor(Math.random() * 20) +1;
    const url1 = `https://rickandmortyapi.com/api/character/${id}`;
     try {
        const res = await fetch(url1);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("error. Hubo algun problema: "+error.message);
    }
}
getRandomCharacter().then(data => console.log(data));