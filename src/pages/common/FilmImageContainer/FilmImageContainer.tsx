import { baseUrl } from '../../../constants/baseUrl';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

interface FilmImageContainerProps {
    img: string;
    genres: string[];
    country: string;
    releaseDate: string;
}

const Container = styled('div')`
    position: relative;
    height: 300px;
    border-radius: 8px;
`;

const Image = styled('img')`
    width: 300px;
    height: 100%;
    object-fit: cover;
`;

const Label = styled('div')`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 16px;
    align-items: center;
    border-radius: 8px 0 0 0;
    background-color: ${theme.palette.secondary.contrastText};
`;

export const FilmImageContainer = ({ img, releaseDate, country, genres }: FilmImageContainerProps) => {
    return (
        <Container>
            <Image src={baseUrl + img} alt='' />
            <Label>
                <Typography variant={'primary500'}>{genres[0]}</Typography>
                <Typography variant={'primary400'}>
                    {country}, {releaseDate}
                </Typography>
            </Label>
        </Container>
    );
};
