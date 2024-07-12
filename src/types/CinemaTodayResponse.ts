import { Film } from './Film';

export interface CinemaTodayResponse {
    success?: boolean;
    films?: Film[];
}
