window.onload = pesquisarid();

//div imagem
let pokenome = document.getElementById('pokename');
let pokeimg = document.getElementById('pokeimg');

//div infos
let poketype = document.getElementById('type');
let pokehp = document.getElementById('hp');
let pokeattack = document.getElementById('attack');
let pokedefense = document.getElementById('defense');
let pokeespecialattack = document.getElementById('especialattack');
let pokeespecialdefense = document.getElementById('especialdefense');
let pokespeed = document.getElementById('speed');

function pesquisarid() {
    let inputid = document.getElementById('pokeid')
    id = Number(inputid.value);
    console.log(`ID #${id}`);
    pokemonid();
}

function proximaid() {
    inputid = document.getElementById('pokeid')
    id = Number(inputid.value);
    id = id + 1;
    inputid.value = id;
    pokemonid();
}

function anteriorid() {
    inputid = document.getElementById('pokeid')
    id = Number(inputid.value);
    id = id - 1;
    inputid.value = id;
    pokemonid();
}

function pokemonid() {
    console.clear();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            pokenome.innerHTML = `${data.name} #${data.id}`;
            pokeimg.src = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;

            pokehp.innerHTML = ` ${data.stats[0].base_stat}`;
            pokeattack.innerHTML = ` ${data.stats[1].base_stat}`;
            pokedefense.innerHTML = ` ${data.stats[2].base_stat}`;
            pokeespecialattack.innerHTML = ` ${data.stats[3].base_stat}`;
            pokeespecialdefense.innerHTML = ` ${data.stats[4].base_stat}`;
            pokespeed.innerHTML = ` ${data.stats[5].base_stat}`;

            const poketypes = (data.types);
            if (poketypes.length == 1) {
                poketype.innerHTML = ` ${data.types[0].type.name}`;
            } else if (poketypes.length == 2) {
                poketype.innerHTML = ` ${data.types[0].type.name}, ${data.types[1].type.name}`;
            }
        })
}