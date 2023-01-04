import { conectApi } from "./conectapi.js";


const AFRICA = "africa";
const AMERICA = "america";
const EUROPE = "europe";
const ASIA = "asia";
const OCEANIA = "oceania";
let flag;


// list

const lista = document.querySelector("[container-flags]");
listCountries();

function createCard(flag: string, name: string, population: number, region: string, capital: string) {
    const card = document.createElement("li");
    //const populationMask = maskPop(population);
    card.className = "container__flags-card";
    card.innerHTML = `<button class="container__flags-card-flag" btn-flag value="${name}" onclick="infoCountry(this.value)"><img
    src="${flag}" class="container__flags-card-flag"></button>
    <div class="container__flags-card-texts">
        <h3 class="container__flags-card-texts-name"><b>${name}</b></h3>
        <p class="container__flags-card-texts-info"><b>Population: </b>${population}</p>
        <p class="container__flags-card-texts-info"><b>Region: </b>${region}</p>
        <p class="container__flags-card-texts-info"><b>Capital: </b>${capital}</p>
    </div>`

    return card;
}

// search bar

const input = document.querySelector<HTMLInputElement>("[search-bar]");
input.addEventListener('input', async function searchCountries() {
    if (input.value == '') {
        listCountries();
    } else {
        console.log(input.value);
        const countries = await conectApi.searchCountries(input.value);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries);
    }
});

// funcoes reutilizaveis

async function listCountries() {
    const countries = await conectApi.getCountries();
    console.log(countries);
    foreach(countries);
}

function foreach(countries: Array<any>) {
    countries.forEach(element => {
        lista.appendChild(createCard(element.flags.svg, element.name.common, element.population, element.region, element.capital));
    });
}


//filters
const africa = document.querySelector("[btn-africa]");
africa.addEventListener('click', async function showByRegion() {
    const countries = await conectApi.searchCountriesByRegion(AFRICA);
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    foreach(countries);
});
const america = document.querySelector("[btn-america]");
america.addEventListener('click', async function showByRegion() {
    const countries = await conectApi.searchCountriesByRegion(AMERICA);
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    foreach(countries);
});
const europe = document.querySelector("[btn-europe]");
europe.addEventListener('click', async function showByRegion() {
    const countries = await conectApi.searchCountriesByRegion(EUROPE);
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    foreach(countries);
});
const asia = document.querySelector("[btn-asia]");
asia.addEventListener('click', async function showByRegion() {
    const countries = await conectApi.searchCountriesByRegion(ASIA);
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    foreach(countries);
});
const oceania = document.querySelector("[btn-oceania]");
oceania.addEventListener('click', async function showByRegion() {
    const countries = await conectApi.searchCountriesByRegion(OCEANIA);
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    foreach(countries);
});

document.querySelector("[btn]").addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
})
