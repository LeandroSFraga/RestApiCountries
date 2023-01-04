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
            element.name.official,
            element.population,
            element.region,
            element.subregion,
            element.capital,
            element.tld,
            element.currencies,
            element.languages,
            element.borders,
            element.likes));
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
    bordercountries: Array<any>,
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
            ${showCountryByCode(bordercountries)}
            <li class="container__country-details-border-country">France</li>
        </ul>
        <div class="container__country-likes">
        <button class="btn-like"></button>
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



function addLike(){
    const btn = document.querySelector('.btn-like');
    btn.addEventListener('click', function() {
        btn.classList.toggle('liked')
    });
}

function removeLike(){

}

//darkmode

showCountry(localStorage.getItem("nome"));
document.querySelector("[btn]").addEventListener("click", () => {
    if(localStorage.getItem("darkmode") === "sim"){
        localStorage.setItem("darkmode", "não");
    } else{
        localStorage.setItem("darkmode", "sim");
    }
    document.body.classList.toggle('dark-mode');
})

if (localStorage.getItem("darkmode") === "sim"){
    document.body.classList.toggle('dark-mode');
}