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
const lista = document.querySelector("[container-flags]");
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
function createCard(flag, name, population, region, capital) {
    const card = document.createElement("li");
    //const populationMask = maskPop(population);
    card.className = "container__flags-card";
    card.innerHTML = `<img class="container__flags-card-flag" src="${flag}">
    <div class="container__flags-card-texts">
        <h3 class="container__flags-card-texts-name"><b>${name}</b></h3>
        <p class="container__flags-card-texts-info"><b>Population: </b>${population}</p>
        <p class="container__flags-card-texts-info"><b>Region: </b>${region}</p>
        <p class="container__flags-card-texts-info"><b>Capital: </b>${capital}</p>
    </div>`;
    return card;
}
//nome
//pop
//regiao
//cap
listCountries();
