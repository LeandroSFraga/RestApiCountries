var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API = "https://restcountries.com/v3.1/all";
const API_SEARCH = "https://restcountries.com/v3.1/name/";
function getCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const conect = yield fetch(API);
        const convertConect = yield conect.json();
        return convertConect;
    });
}
function searchCountries(country) {
    return __awaiter(this, void 0, void 0, function* () {
        const conect = yield fetch(API_SEARCH + country);
        const convertConect = yield conect.json();
        console.log(convertConect);
        return convertConect;
    });
}
export const conectApi = {
    getCountries,
    searchCountries
};
