import { ICinemaTodayResponse } from '../types/ICinemaTodayResponse';
import { instance } from './api';
import { AxiosResponse } from 'axios';
import { IFilmByIdResponse } from '../types/IFilmByIdResponse';

export const getCinemaToday = (): Promise<ICinemaTodayResponse> =>
    instance.get<ICinemaTodayResponse, AxiosResponse<ICinemaTodayResponse>>('/cinema/today').then((response) => {
        return response.data;
    });

export const getFilmById = (id: number): Promise<IFilmByIdResponse> =>
    instance.get<IFilmByIdResponse, AxiosResponse<IFilmByIdResponse>>(`/cinema/film/${id}`).then((response) => {
        return response.data;
    });
