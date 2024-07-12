import { Film } from './Film';

export interface FilmByIdResponse {
    success?: boolean;
    film?: Film;
}
