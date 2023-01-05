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
const AFRICA = "Africa";
const AMERICA = "Americas";
const EUROPE = "Europe";
const ASIA = "Asia";
const OCEANIA = "Oceania";
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
            while (lista.firstChild) {
                lista.removeChild(lista.firstChild);
            }
            listCountries();
        }
        else {
            console.log(input.value);
            const countries = yield conectApi.searchCountries(input.value);
            while (lista.firstChild) {
                lista.removeChild(lista.firstChild);
            }
            foreach(countries.data);
        }
    });
});
// funcoes reutilizaveis
function listCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const load = document.querySelector('[principal]');
        load.classList.add('loading');
        const countries = yield conectApi.getCountries();
        console.log(countries);
        load.classList.remove('loading');
        foreach(countries.data);
    });
}
function foreach(countries) {
    countries.forEach(element => {
        lista.appendChild(createCard(element.flag, element.name, element.population, element.region, element.capital));
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
        foreach(countries.data);
    });
});
const america = document.querySelector("[btn-america]");
america.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(AMERICA);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries.data);
    });
});
const europe = document.querySelector("[btn-europe]");
europe.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(EUROPE);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries.data);
    });
});
const asia = document.querySelector("[btn-asia]");
asia.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(ASIA);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries.data);
    });
});
const oceania = document.querySelector("[btn-oceania]");
oceania.addEventListener('click', function showByRegion() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield conectApi.searchCountriesByRegion(OCEANIA);
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        foreach(countries.data);
    });
});
//darkmode
document.querySelector("[btn]").addEventListener("click", () => {
    if (localStorage.getItem("darkmode") === "sim") {
        localStorage.setItem("darkmode", "não");
    }
    else {
        localStorage.setItem("darkmode", "sim");
    }
    document.body.classList.toggle('dark-mode');
});
if (localStorage.getItem("darkmode") === "sim") {
    document.body.classList.toggle('dark-mode');
}
