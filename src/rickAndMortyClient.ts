import { getEpisodes, getCharacter } from 'rickmortyapi';
import { Info, Character } from 'rickmortyapi/dist/interfaces';
import { CustomEpisode, RickAndMortyApiFilter } from './types';

export class RickAndMortyClient {
  constructor() {
  }

  async getEpisodes(filter: RickAndMortyApiFilter): Promise<Info<CustomEpisode[]>> {
    return (await getEpisodes(filter)).data;
  }

  async getCharacters(ids: number[]): Promise<Character[]>  {
    return (await getCharacter(ids)).data;
  }
}
