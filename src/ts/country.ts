import { conectApi } from "./conectapi.js";

const article = document.querySelector("[container__country]");

async function showCountry(nome: string) {
    const country = await conectApi.searchCountries(nome);
    console.log(country);
    foreach(country);
}

let borderhtml: string = ''
async function showCountryByCode(code: Array<any>) {
    code.forEach(async Element => {
        const country = await conectApi.searchCountriesByCode(Element);
        console.log(country);
        borderhtml += `${borderof(country)}`;
    })
    console.log(borderhtml);
    return borderhtml;
}

function foreach(country: Array<any>) {
    country.forEach(element => {
        article.appendChild(createCountry(element.flags.svg,
            element.name.common,
            element.nativename,
            element.population,
            element.region,
            element.subregion,
            element.capital,
            element.tld,
            element.currencies,
            element.languages,
            element.borders));
    });
}

function createCountry(
    flag: string,
    name: string,
    nativename: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    topleveldomain: string,
    currencies: Object,
    languages: Object,
    bordercountries: Array<any>
) {
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
    </div>`

    return card;
}

function toStringCurrencies(list: Object) {
    const values = Object.keys(list).map(key => list[key]);
    let currencie;
    values.forEach(Element => currencie = Element.name);
    return currencie;
}

function toStringLang(list: Object) {
    const values = Object.keys(list).map(key => list[key]);

    const valuesSeparated = values.join(", ");
    return valuesSeparated;
}


// let borderslist: string ='';
function borderof(borders: Array<any>): string {
    let borderslist = '';
    borders.forEach(Element => {
        borderslist = `${createborder(Element.name.common)}
`;
    })
    console.log(borderslist);
    return borderslist;
}

function createborder(country: string) {
    let borders: string = `<li class="container__country-details-border-country">${country}</li>`;
    return borders;
}

showCountry(localStorage.getItem("nome"));