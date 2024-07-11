import { ICinemaTodayResponse } from '../types/ICinemaTodayResponse';
import { instance } from './api';
import { AxiosResponse } from 'axios';
import { IFilmByIdResponse } from '../types/IFilmByIdResponse';
import { IScheduleByIdResponse } from '../types/IScheduleByIdResponse';

export const getCinemaToday = (): Promise<ICinemaTodayResponse> =>
    instance.get<ICinemaTodayResponse, AxiosResponse<ICinemaTodayResponse>>('/cinema/today').then((response) => {
        return response.data;
    });

export const getFilmById = (id: number): Promise<IFilmByIdResponse> =>
    instance.get<IFilmByIdResponse, AxiosResponse<IFilmByIdResponse>>(`/cinema/film/${id}`).then((response) => {
        return response.data;
    });

export const getScheduleById = (id: number): Promise<IScheduleByIdResponse> =>
    instance.get<IScheduleByIdResponse, AxiosResponse<IScheduleByIdResponse>>(`/cinema/film/${id}/schedule`).then((response) => {
        return response.data;
    });
