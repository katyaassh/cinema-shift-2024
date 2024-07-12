import { Button, ButtonProps, styled } from '@mui/material';
import { theme } from '../../../theme';

const Container = styled(Button)<ButtonProps>`
    width: 100%;
    padding: 16px 32px;
    background-color: ${theme.palette.secondary.main};
    text-transform: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: white;
    border-radius: 16px;

    &:hover {
        background-color: ${theme.palette.secondary.dark};
    }
`;

export const MainButton = ({ ...props }) => {
    return <Container {...props} />;
};
