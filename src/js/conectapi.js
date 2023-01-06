var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API = "https://countries-api-esfl.onrender.com/countries";
const API_NAME = "https://countries-api-esfl.onrender.com/countries/filterBy?name=";
const API_REGION = "https://countries-api-esfl.onrender.com/countries/filterBy?region=";
const API_PUT = "https://countries-api-esfl.onrender.com/countries/likes/";
const API_CODE = "https://countries-api-esfl.onrender.com/countries/filterBy?countrieCode=";
function getCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const conect = yield fetch(API);
        const convertConect = yield conect.json();
        return convertConect;
    });
}
function putCountries(body) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(body);
        const conect = yield fetch(API_PUT, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const convertConect = yield conect.json();
        console.log(convertConect);
        return convertConect;
    });
}
function searchCountries(country) {
    return __awaiter(this, void 0, void 0, function* () {
        const conect = yield fetch(API_NAME + country);
        const convertConect = yield conect.json();
        return convertConect;
    });
}
function searchCountriesByRegion(region) {
    return __awaiter(this, void 0, void 0, function* () {
        const conect = yield fetch(API_REGION + region);
        const convertConect = yield conect.json();
        return convertConect;
    });
}
function searchCountriesByCode(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const conect = yield fetch(API_CODE + code);
        const convertConect = yield conect.json();
        return convertConect;
    });
}
export const conectApi = {
    getCountries,
    searchCountries,
    searchCountriesByRegion,
    searchCountriesByCode,
    putCountries
};
