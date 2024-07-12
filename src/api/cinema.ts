import { CinemaTodayResponse } from '../types/CinemaTodayResponse';
import { instance } from './api';
import { AxiosResponse } from 'axios';
import { FilmByIdResponse } from '../types/FilmByIdResponse';

export const getCinemaToday = (): Promise<CinemaTodayResponse> =>
    instance.get<CinemaTodayResponse, AxiosResponse<CinemaTodayResponse>>('/cinema/today').then((response) => {
        return response.data;
    });

export const getFilmById = (id: number): Promise<FilmByIdResponse> =>
    instance.get<FilmByIdResponse, AxiosResponse<FilmByIdResponse>>(`/cinema/film/${id}`).then((response) => {
        return response.data;
    });
