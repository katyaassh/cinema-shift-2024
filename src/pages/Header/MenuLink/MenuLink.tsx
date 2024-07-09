import { styled, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../theme';

const Container = styled(NavLink)`
    display: inline-flex;
    height: 24px;
    gap: 16px;
    text-decoration: none;
    color: black;
`;

const Image = styled('img')`
    width: 24px;
    height: 24px;
`;

interface MenuLinkProps {
    icon: string;
    text: string;
    link: string;
}

export const MenuLink = ({ icon, text, link }: MenuLinkProps): JSX.Element => {
    return (
        <Container to={link}>
            <Image src={icon} alt='user' />
            <Typography variant={'menu'} color={`${theme.palette.primary.main}`}>
                {text}
            </Typography>
        </Container>
    );
};
