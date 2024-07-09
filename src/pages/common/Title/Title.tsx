import { Typography } from '@mui/material';
import { theme } from '../../../theme';

interface TitleProps {
    text: string;
}

export const Title = ({ text }: TitleProps): JSX.Element => {
    return (
        <Typography variant={'h2'} color={`${theme.palette.primary.main}`}>
            {text}
        </Typography>
    );
};