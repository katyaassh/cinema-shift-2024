import { IFilm } from './IFilm';

export interface ICinemaTodayResponse {
    success?: boolean;
    films?: IFilm[];
}
