import { styled } from '@mui/material';
import { Container as InnerContainer } from '../common/Container/Container';
import { Title } from '../common/Title/Title';
import { CinemaCards } from './CinemaCards/CinemaCards';

const InnerContainerEntity = styled(InnerContainer)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 48px;
`;

export const Main = () => {
    return (
        <main>
            <InnerContainerEntity>
                <Title text={'Афиша'} />
                <CinemaCards />
            </InnerContainerEntity>
        </main>
    );
};
