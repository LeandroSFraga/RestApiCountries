const API = "https://restcountries.com/v3.1/all";
const API_NAME = "https://restcountries.com/v3.1/name/";
const API_REGION = "https://restcountries.com/v3.1/region/";
const API_CODE = "https://restcountries.com/v3.1/alpha/";

async function getCountries(){
    const conect = await fetch(API);
    const convertConect = await conect.json();
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
    searchCountriesByCode
}