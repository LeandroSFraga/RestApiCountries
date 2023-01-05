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
const article = document.querySelector("[container__country]");
function showCountry(nome) {
    return __awaiter(this, void 0, void 0, function* () {
        const load = document.querySelector('[princpal-country]');
        load.classList.add('loading');
        const country = yield conectApi.searchCountries(nome);
        console.log(country);
        load.classList.remove('loading');
        foreach(country.data);
        like();
    });
}
function foreach(country) {
    country.forEach(element => {
        article.appendChild(createCountry(element.flag, element.name, element.officialName, //native name
        element.population, element.region, element.subregion, element.capital, element.topLevelDomains, element.currencies, element.languages, element.borders, element.likes));
    });
}
let created = false;
function createCountry(flag, name, nativename, population, region, subregion, capital, topleveldomain, currencies, languages, borders, likes) {
    const card = document.createElement("article");
    //const populationMask = maskPop(population);
    card.className = "container__country";
    // createBorder();
    card.innerHTML = `
    <img src="${flag}" class="container__country-image">
    <div class="container__country-details">
        <h2>${name}</h2>
            <ul class="container__country-details-list" >
                <li><b>Official Name: </b>${nativename}</li >
                <li><b>Population: </b>${population}</li >
                <li><b>Region: </b>${region}</li >
                <li><b>Sub Region: </b>${subregion}</li >
                <li><b>Capital: </b>${capital}</li >
                <li><b>Top Level Domain: </b>${topleveldomain}</li >
                <li><b>Currencies: </b>${toStringCurrencies(currencies)}</li >
                <li><b>Languages: </b>${toStringLang(languages)}</li >
            </ul>
            <ul class="container__country-details-border">
                <p><b>Border Countries: </b></p>
                ${borderof(borders)}
            </ul>
            <div class="container__country-likes">
                <button class="btn-like" btn-like>&#10084</button>
                <p class="text-like"> ${likes} Likes </p>
            </div>
    </div>`;
    return card;
}
function toStringCurrencies(list) {
    const values = Object.keys(list).map(key => list[key]);
    let currencie;
    values.forEach(Element => currencie = Element.name);
    return currencie;
}
function toStringLang(list) {
    const values = Object.keys(list).map(key => list[key]);
    const valuesSeparated = values.join(", ");
    return valuesSeparated;
}
//FRONTEIRAS
function borderof(borders) {
    let borderslist = '';
    if (borders.length === 0) {
        return "none";
    }
    borders.forEach(Element => {
        borderslist += `${createborder(Element)}
    `;
        console.log(borderslist);
    });
    console.log(borderslist);
    return borderslist;
}
function createborder(country) {
    let borders = `<button value="${country}"><li class="container__country-details-border-country">${country}</li></button>`;
    return borders;
}
//darkmode
showCountry(localStorage.getItem("nome"));
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
// LIKe
function like() {
    const countryname = localStorage.getItem("nome");
    const btn = document.querySelector('[btn-like]');
    btn.addEventListener('click', function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (sessionStorage.getItem(`${countryname}liked`) === 'sim') {
                const body = {
                    name: countryname,
                    like: -1
                };
                sessionStorage.setItem(`${countryname}liked`, "nao");
                btn.classList.toggle('liked');
                yield conectApi.putCountries(body);
                window.location.reload();
            }
            else {
                const body = {
                    name: countryname,
                    like: 1
                };
                btn.classList.toggle('non-liked');
                sessionStorage.setItem(`${countryname}liked`, "sim");
                yield conectApi.putCountries(body);
                window.location.reload();
            }
        });
    });
    if (sessionStorage.getItem(`${countryname}liked`) === "sim") {
        btn.classList.toggle('liked');
    }
}
