import { Star } from '../Star/Star';
import { Rating, Typography } from '@mui/material';
import { IUserRatings } from '../../../types/IFilm';
import { theme } from '../../../theme';
import styled from '@emotion/styled';

interface IStarRatingProps {
    userRatings: IUserRatings;
}

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
export const StarRating = ({ userRatings }: IStarRatingProps): JSX.Element => {
    return (
        <Container>
            <Rating
                name='read-only'
                precision={0.5}
                defaultValue={5.1}
                value={Number(userRatings.kinopoisk) / 2}
                icon={<Star isEmpty={false} />}
                emptyIcon={<Star isEmpty={true} />}
                readOnly
            />
            <Typography variant={'paragraph14'} color={`${theme.palette.primary.dark}`}>
                {'Kinopoisk' + ' ' + '-' + ' ' + userRatings.kinopoisk}
            </Typography>
        </Container>
    );
};