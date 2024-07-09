import { IFilm } from './IFilm';

export interface IFilmByIdResponse {
    success?: boolean;
    film?: IFilm;
}
