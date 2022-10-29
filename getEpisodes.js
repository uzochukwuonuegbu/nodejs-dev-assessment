"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rickAndMortyClient_1 = require("./rickAndMortyClient");
function getIdsFromCharacterUrl(characters) {
    return (characters || []).map(str => str.split('character/')[1]).map(s => Number(s));
}
function getUniqueCharaters(results, rickAndMortyInstance) {
    return __awaiter(this, void 0, void 0, function* () {
        const characterIds = [];
        results.map(({ characters = [] }) => {
            characterIds.push(...getIdsFromCharacterUrl(characters));
        });
        const uniqueIds = characterIds.filter((v, i, a) => a.indexOf(v) === i);
        return rickAndMortyInstance.getCharacters(uniqueIds);
    });
}
function getEpisodesWithCharacters(filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const rickAndMortyInstance = new rickAndMortyClient_1.RickAndMortyClient();
        const { info, results } = yield rickAndMortyInstance.getEpisodes(filter);
        if (!results)
            return;
        const freqCounter = {};
        // get all unique characters
        const uniqueCharacters = yield getUniqueCharaters(results, rickAndMortyInstance);
        // populate unique charaters
        uniqueCharacters.map(x => freqCounter[`${x.id}`] = x);
        const finalRresult = results.map((res) => {
            return Object.assign(Object.assign({}, res), { characters: getIdsFromCharacterUrl(res.characters).map(id => (freqCounter[id])) });
        });
        console.log({ info, results: finalRresult });
    });
}
function main() {
    return getEpisodesWithCharacters({ /* page: 2 */});
}
if (require.main === module) {
    main();
}
