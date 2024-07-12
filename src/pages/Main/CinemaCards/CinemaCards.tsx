import { useEffect, useState } from 'react';
import { getCinemaToday } from '../../../api/cinema';
import { CinemaTodayResponse } from '../../../types/CinemaTodayResponse';
import { CinemaCard } from '../CinemaCard/CinemaCard';
import styled from '@emotion/styled';
import { Container as InnerContainer } from '../../common/Container/Container';

const InnerContainerEntity = styled(InnerContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`;

export const CinemaCards = () => {
    const [cinemaToday, setCinemaToday] = useState<CinemaTodayResponse>({});

    useEffect(() => {
        getCinemaToday().then((response) => {
            setCinemaToday(response);
        });
    }, [setCinemaToday]);

    return (
        <InnerContainerEntity>
            {cinemaToday.films?.map((film) => {
                return <CinemaCard film={film} key={film.id} />;
            })}
        </InnerContainerEntity>
    );
};
