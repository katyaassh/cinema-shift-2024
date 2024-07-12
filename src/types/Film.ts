interface Person {
    id: number;
    fullName: string;
    professions: string[];
}

interface Country {
    code: string;
    code2: string;
    id: number;
    name: string;
}

export interface UserRatings {
    imdb: string;
    kinopoisk: string;
}

export interface Film {
    id: number;
    name: string;
    originalName: string;
    description: string;
    releaseDate: string;
    actors: Person[];
    ageRating: string;
    country: Country;
    directors: Person[];
    genres: string[];
    img: string;
    runtime: number;
    userRatings: UserRatings;
}
