interface IPerson {
    id: number;
    fullName: string;
    professions: string[];
}

interface ICountry {
    code: string;
    code2: string;
    id: number;
    name: string;
}

export interface IUserRatings {
    imdb: string;
    kinopoisk: string;
}

export interface IFilm {
    id: number;
    name: string;
    originalName: string;
    description: string;
    releaseDate: string;
    actors: IPerson[];
    ageRating: string;
    country: ICountry;
    directors: IPerson[];
    genres: string[];
    img: string;
    runtime: number;
    userRatings: IUserRatings;
}
