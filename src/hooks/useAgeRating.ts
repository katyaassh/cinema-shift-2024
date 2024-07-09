export const useAgeRating = (ageRating: string) => {
    if (ageRating === 'G') return '0+';
    else if (ageRating === 'PG13') return '12+';
    else if (ageRating === 'R') return '16+';
    else if (ageRating === 'NC17') return '18+';
};
