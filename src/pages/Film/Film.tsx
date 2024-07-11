import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IFilmByIdResponse } from '../../types/IFilmByIdResponse';
import { getFilmById, getScheduleById } from '../../api/cinema';
import { Container as InnerContainer } from '../common/Container/Container';
import styled from '@emotion/styled';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import { Typography } from '@mui/material';
import { theme } from '../../theme';
import { Content } from './Content/Content';
import { Schedule } from '../Schedule/Schedule';
import { IScheduleByIdResponse } from '../../types/IScheduleByIdResponse';

const InnerContainerEntity = styled(InnerContainer)`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    margin-bottom: 150px;
`;

const BackButton = styled(NavLink)`
    display: inline-flex;
    height: 24px;
    gap: 16px;
    text-decoration: none;
    color: ${theme.palette.primary.dark};
`;

export const Film = (): JSX.Element => {
    const params = useParams();

    const [film, setFilm] = useState<IFilmByIdResponse>({});
    const [schedules, setSchedules] = useState<IScheduleByIdResponse>({});

    useEffect(() => {
        getFilmById(Number(params.id)).then((response) => {
            setFilm(response);
        });
        getScheduleById(Number(params.id)).then((response) => {
            setSchedules(response);
        });
    }, [params]);

    return (
        <InnerContainerEntity>
            <BackButton to={'/'}>
                <img src={arrowLeft} alt='arrowLeft' />
                <Typography variant={'paragraph16'}>Назад</Typography>
            </BackButton>
            {film.film ? <Content film={film.film} /> : null}
            {schedules.schedules ? <Schedule schedules={schedules.schedules} /> : null}
        </InnerContainerEntity>
    );
};
