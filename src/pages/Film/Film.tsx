import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FilmByIdResponse } from '../../types/FilmByIdResponse';
import { getFilmById } from '../../api/cinema';
import { Container as InnerContainer } from '../common/Container/Container';
import styled from '@emotion/styled';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import { Typography } from '@mui/material';
import { theme } from '../../theme';
import { Content } from './Content/Content';

const InnerContainerEntity = styled(InnerContainer)`
    display: flex;
    flex-direction: column;
    gap: 0 24px;
    margin-top: 24px;
`;

const BackButton = styled(NavLink)`
    display: inline-flex;
    height: 24px;
    gap: 16px;
    text-decoration: none;
    color: ${theme.palette.primary.dark};
`;

export const Film = () => {
    const params = useParams();

    const [film, setFilm] = useState<FilmByIdResponse>({});

    useEffect(() => {
        getFilmById(Number(params.id)).then((response) => {
            setFilm(response);
        });
    }, [params]);

    return (
        <InnerContainerEntity>
            <BackButton to={'/'}>
                <img src={arrowLeft} alt='arrowLeft' />
                <Typography variant={'paragraph16'}>Назад</Typography>
            </BackButton>
            {film.film ? <Content film={film.film} /> : null}
        </InnerContainerEntity>
    );
};
