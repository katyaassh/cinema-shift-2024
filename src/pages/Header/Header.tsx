import logo from '../../assets/images/logo.svg';
import user from '../../assets/icons/user.svg';
import ticket from '../../assets/icons/ticket.svg';
import exit from '../../assets/icons/exit.svg';
import { NavLink } from 'react-router-dom';
import { MenuLink } from './MenuLink/MenuLink';

import { Container as InnerContainer } from '../common/Container/Container';
import { styled } from '@mui/material';
import { theme } from '../../theme';

const Container = styled('header')`
    padding: 22px 0;
    border-bottom: 1px solid ${theme.palette.secondary.light};
`;
const InnerContainerEntity = styled(InnerContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftContainer = styled('div')`
    display: flex;
    align-items: center;
    gap: 32px;
`;

export const Header = (): JSX.Element => {
    return (
        <Container>
            <InnerContainerEntity>
                <LeftContainer>
                    <NavLink to={'/'}>
                        <img src={logo} alt='logo' />
                    </NavLink>
                    <MenuLink icon={user} text={'Профиль'} link={''} />
                    <MenuLink icon={ticket} text={'Билеты'} link={''} />
                </LeftContainer>
                <MenuLink icon={exit} text={'Выход'} link={''} />
            </InnerContainerEntity>
        </Container>
    );
};
