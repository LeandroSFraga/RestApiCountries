import { conectApi } from "./conectapi.js";

const article = document.querySelector("[container__country]");

async function showCountry(nome: string) {
    const country = await conectApi.searchCountries(nome);
    console.log(country);
    foreach(country.data);
    like();
}

function foreach(country: Array<any>) {
    country.forEach(element => {
        article.appendChild(createCountry(element.flag,
            element.name,
            element.name, //native name
            element.population,
            element.region,
            element.subregion,
            element.capital,
            element.topLevelDomains,
            element.currencies,
            element.languages,
            element.borders,
            element.likes));
    });
}

let created = false;
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
    borders: Array<any>,
    likes: number
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
                ${borderof(borders)}
            </ul>
            <div class="container__country-likes">
                <button class="btn-like" btn-like>&#10084</button>
                <p class="text-like"> ${likes} Likes </p>
            </div>
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


//FRONTEIRAS

function borderof(borders: Array<any>): string {
    let borderslist = '';
//     if( borders.length === 0){
//         return "none";
//     }
//     borders.forEach(Element => {
//         borderslist += `${createborder(Element)}
// `;
//         console.log(borderslist);
//     })
//     console.log(borderslist);
    return borderslist;
}

function createborder(country: string) {
    let borders: string = `<li class="container__country-details-border-country">${country}</li>`;
    return borders;
}

//darkmode

showCountry(localStorage.getItem("nome"));
document.querySelector("[btn]").addEventListener("click", () => {
    if (localStorage.getItem("darkmode") === "sim") {
        localStorage.setItem("darkmode", "não");
    } else {
        localStorage.setItem("darkmode", "sim");
    }
    document.body.classList.toggle('dark-mode');
})

if (localStorage.getItem("darkmode") === "sim") {
    document.body.classList.toggle('dark-mode');
}

// LIKe

function like() {
    const countryname = localStorage.getItem("nome");
    const btn = document.querySelector('[btn-like]');
    btn.addEventListener('click', async function () {
        if (sessionStorage.getItem(`${countryname}liked`) === 'sim') {
            const body = {
                name: countryname,
                like: -1
            }
            sessionStorage.setItem(`${countryname}liked`, "nao");
            btn.classList.toggle('liked');
            conectApi.putCountries(body)
        } else {
            const body = {
                name: countryname,
                like: 1
            }
            btn.classList.toggle('non-liked');
            sessionStorage.setItem(`${countryname}liked`, "sim");
            conectApi.putCountries(body)
        }

    });
    if (sessionStorage.getItem(`${countryname}liked`) === "sim"){
        btn.classList.toggle('liked');
    }
}

