//consultar la API
const consultarPokemon = (id,number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}

//generar un pokemon random
const btnSeleccionar = () => {
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon,1);
    consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

//obtnere la referenca del div dsonde se va a pintar los pokemons
const lista = document.getElementById("listarpokemon")

//presentar los pokemons
const pintarPokemon = (data, id) => {
}

