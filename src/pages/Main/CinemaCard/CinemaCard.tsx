import { IFilm } from '../../../types/IFilm';
import { Card, CardActions, Typography } from '@mui/material';
import { theme } from '../../../theme';
import { MainButton } from '../../common/MainButton/MainButton';
import styled from '@emotion/styled';
import { FilmImageContainer } from '../../common/FilmImageContainer/FilmImageContainer';
import { StarRating } from '../../common/StarRating/StarRating';

interface ICinemaCardProps {
    film: IFilm;
}

const CardEntity = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    box-shadow: none;
`;

const CardActionsEntity = styled(CardActions)`
    padding: 0;
`;

const DescriptionBlock = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const BottomBlock = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: auto;
`;

export const CinemaCard = ({ film }: ICinemaCardProps): JSX.Element => {
    return (
        <CardEntity>
            <FilmImageContainer img={film.img} genres={film.genres} releaseDate={film.releaseDate} country={film.country.name} />
            <DescriptionBlock>
                <Typography variant={'h3'} color={`${theme.palette.primary.main}`}>
                    {film.name}
                </Typography>
                <Typography variant={'paragraph14'} color={`${theme.palette.primary.dark}`}>
                    {film.originalName}
                </Typography>
            </DescriptionBlock>
            <BottomBlock>
                <StarRating userRatings={film.userRatings} />
                <CardActionsEntity>
                    <MainButton href={`film/${film.id}`}>Подробнее</MainButton>
                </CardActionsEntity>
            </BottomBlock>
        </CardEntity>
    );
};
