import { conectApi } from "./conectapi.js";

const lista = document.querySelector("[container-flags]");

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

function createCard(flag: string, name: string, population: number, region: string, capital: string) {
    const card = document.createElement("li");
    //const populationMask = maskPop(population);
    card.className = "container__flags-card";
    card.innerHTML = `<img class="container__flags-card-flag" src="${flag}">
    <div class="container__flags-card-texts">
        <h3 class="container__flags-card-texts-name"><b>${name}</b></h3>
        <p class="container__flags-card-texts-info"><b>Population: </b>${population}</p>
        <p class="container__flags-card-texts-info"><b>Region: </b>${region}</p>
        <p class="container__flags-card-texts-info"><b>Capital: </b>${capital}</p>
    </div>`

    return card;
}

//nome
//pop
//regiao
//cap

listCountries();