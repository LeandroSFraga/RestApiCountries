var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function createCard(flag, name, population, region, capital) {
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
    </div>`;
    return card;
}
// search bar
const input = document.querySelector("[search-bar]");
input.addEventListener('input', function searchCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        if (input.value == '') {
            listCountries();
        }
        else {
            console.log(input.value);
            const countries = yield conectApi.searchCountries(input.value);
            while (lista.firstChild) {
                lista.removeChild(lista.firstChild);
            }
            foreach(countries);
        }
    });
});
// funcoes reutilizaveis
function listCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.getCountries();
        console.log(countries);
        foreach(countries);
    });
}
function foreach(countries) {
    countries.forEach(element => {
        lista.appendChild(createCard(element.flags.svg, element.name.common, element.population, element.region, element.capital));
    });
}
//filters
const africa = document.querySelector("[btn-africa]");
africa.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(AFRICA);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries);
    });
});
const america = document.querySelector("[btn-america]");
america.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(AMERICA);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries);
    });
});
const europe = document.querySelector("[btn-europe]");
europe.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(EUROPE);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries);
    });
});
const asia = document.querySelector("[btn-asia]");
asia.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(ASIA);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries);
    });
});
const oceania = document.querySelector("[btn-oceania]");
oceania.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(OCEANIA);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries);
    });
});
document.querySelector("[btn]").addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
});
