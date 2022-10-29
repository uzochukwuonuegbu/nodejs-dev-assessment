import { Episode } from 'rickmortyapi/dist/interfaces';

export interface RickAndMortyApiFilter {
    page?: number
}

export interface CustomEpisode extends Episode {
    characters?: string[];
  }