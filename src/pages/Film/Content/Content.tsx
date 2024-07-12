import { Film } from '../../../types/Film';
import { FilmImageContainer } from '../../common/FilmImageContainer/FilmImageContainer';
import { Button, ButtonProps, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useAgeRating } from '../../../hooks/useAgeRating';
import { StarRating } from '../../common/StarRating/StarRating';
import { useState } from 'react';
import { theme } from '../../../theme';

interface ContentProps {
    film: Film;
}

const Container = styled('div')`
    display: flex;
    gap: 32px;
`;

const Description = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Text = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const OpenButton = styled(Button)<ButtonProps>`
    padding: 0 5px;
    text-transform: none;
    color: ${theme.palette.secondary.light};
`;

export const Content = ({ film }: ContentProps) => {
    const [isSliced, setIsSliced] = useState(true);

    const textDescriptions = film.description.length > 150 ? film.description.substring(0, 150) : film.description;

    const ageRating = useAgeRating(film.ageRating);

    return (
        <Container>
            <FilmImageContainer country={film.country.name} img={film.img} releaseDate={film.releaseDate} genres={film.genres} />
            <Description>
                <Text>
                    <Typography variant={'h1'}>
                        {film.name} ({ageRating})
                    </Typography>
                    <Typography variant={'paragraph14'}>{film.originalName}</Typography>
                </Text>
                <StarRating userRatings={film.userRatings} />
                {isSliced ? (
                    <span>
                        {textDescriptions}...{' '}
                        <OpenButton onClick={() => setIsSliced(false)}>
                            <Typography variant={'paragraph16'}>раскрыть</Typography>
                        </OpenButton>
                    </span>
                ) : (
                    film.description
                )}
            </Description>
        </Container>
    );
};
