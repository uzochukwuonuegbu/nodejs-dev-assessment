import { Character } from 'rickmortyapi/dist/interfaces';
import { RickAndMortyClient } from './rickAndMortyClient';
import { CustomEpisode, RickAndMortyApiFilter } from './types';


function getIdsFromCharacterUrl(characters?: string[]): number[] {
  return (characters || []).map(str => str.split('character/')[1]).map(s => Number(s));
}


async function getUniqueCharaters(results: CustomEpisode[], rickAndMortyInstance: RickAndMortyClient): Promise<Character[]> {
  const characterIds: number[] = [];
  results.forEach(({ characters = [] }) => {
    characterIds.push(...getIdsFromCharacterUrl(characters));
  })
  const uniqueIds = characterIds.filter((v, i, a) => a.indexOf(v) === i);
  return rickAndMortyInstance.getCharacters(uniqueIds);

}


async function getEpisodesWithCharacters(filter: RickAndMortyApiFilter): Promise<void> {
    const rickAndMortyInstance = new RickAndMortyClient();

    const { info, results } = await rickAndMortyInstance.getEpisodes(filter);

    if (!results) return;

    // temp cache...
    const characterCache: { [id: string]: Character } = {};
    
    // get all unique characters
    const uniqueCharacters = await getUniqueCharaters(results, rickAndMortyInstance);

    // populate unique charaters
    uniqueCharacters.map(x => characterCache[`${x.id}`] = x);

    const finalRresult = results.map((res) => {
      return {
        ...res,
        characters: getIdsFromCharacterUrl(res.characters).map(id => (characterCache[id])),
      }
    });

    console.log({ info, results: finalRresult });
  }



function main() {
  return getEpisodesWithCharacters({ /* page: 2 */ });
}
  
if (require.main === module) {
  main();
}