import { useEffect, useState } from 'react';
import { getCinemaToday } from '../../../api/cinema';
import { ICinemaTodayResponse } from '../../../types/ICinemaTodayResponse';
import { CinemaCard } from '../CinemaCard/CinemaCard';
import styled from '@emotion/styled';
import { Container as InnerContainer } from '../../common/Container/Container';

const InnerContainerEntity = styled(InnerContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`;

export const CinemaCards = (): JSX.Element => {
    const [cinemaToday, setCinemaToday] = useState<ICinemaTodayResponse>({});

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
