const API = "https://restcountries.com/v3.1/all";
const API_SEARCH = "https://restcountries.com/v3.1/name/";

async function getCountries(){
    const conect = await fetch(API);
    const convertConect = await conect.json();
    return convertConect;
}

async function searchCountries(country: string){
    const conect = await fetch(API_SEARCH+country);
    const convertConect = await conect.json();
    console.log(convertConect);
    return convertConect;
}

export const conectApi = {
    getCountries,
    searchCountries
}