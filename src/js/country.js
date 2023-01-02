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
        const country = yield conectApi.searchCountries(nome);
        console.log(country);
        foreach(country);
    });
}
let borderhtml = '';
function showCountryByCode(code) {
    return __awaiter(this, void 0, void 0, function* () {
        code.forEach((Element) => __awaiter(this, void 0, void 0, function* () {
            const country = yield conectApi.searchCountriesByCode(Element);
            console.log(country);
            borderhtml += `${borderof(country)}`;
        }));
        console.log(borderhtml);
        return borderhtml;
    });
}
function foreach(country) {
    country.forEach(element => {
        article.appendChild(createCountry(element.flags.svg, element.name.common, element.nativename, element.population, element.region, element.subregion, element.capital, element.tld, element.currencies, element.languages, element.borders));
    });
}
function createCountry(flag, name, nativename, population, region, subregion, capital, topleveldomain, currencies, languages, bordercountries) {
    const card = document.createElement("article");
    //const populationMask = maskPop(population);
    card.className = "container__country";
    // createBorder();
    card.innerHTML = `
    <img src="${flag}" class="container__country-image">
    <div class="container__country-details">
        <h2>${name}</h2>
            <ul class="container__country-details-list" >
                <li><b>Native Name: </b>${nativename}</li >
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
            ${showCountryByCode(bordercountries)}
            <li class="container__country-details-border-country">France</li>
        </ul>
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
// let borderslist: string ='';
function borderof(borders) {
    let borderslist = '';
    borders.forEach(Element => {
        borderslist = `${createborder(Element.name.common)}
`;
    });
    console.log(borderslist);
    return borderslist;
}
function createborder(country) {
    let borders = `<li class="container__country-details-border-country">${country}</li>`;
    return borders;
}
showCountry(localStorage.getItem("nome"));
