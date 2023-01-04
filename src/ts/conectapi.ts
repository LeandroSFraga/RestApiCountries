const API = "https://countries-api-esfl.onrender.com/countries";
const API_NAME = "https://countries-api-esfl.onrender.com/countries/filterBy?name=";
const API_REGION = "https://countries-api-esfl.onrender.com/countries/filterBy?region=";
const API_PUT = "https://countries-api-esfl.onrender.com/countries/likes/"
const API_CODE = "https://restcountries.com/v3.1/alpha/";

async function getCountries(){
    const conect = await fetch(API);
    const convertConect = await conect.json();
    return convertConect;
}

async function putCountries(body: any) {
    console.log(body);
    const conect = await fetch(API_PUT, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const convertConect = await conect.json();
    console.log(convertConect);
    return convertConect;
}

async function searchCountries(country: string){
    const conect = await fetch(API_NAME+country);
    const convertConect = await conect.json();
    return convertConect;
}

async function searchCountriesByRegion(region: string){
    const conect = await fetch(API_REGION+region);
    const convertConect = await conect.json();
    return convertConect;
}

async function searchCountriesByCode(code: string){
    const conect = await fetch(API_CODE+code);
    const convertConect = await conect.json();
    return convertConect;
}


export const conectApi = {
    getCountries,
    searchCountries,
    searchCountriesByRegion,
    searchCountriesByCode,
    putCountries
}