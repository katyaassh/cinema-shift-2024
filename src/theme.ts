import { createTheme } from '@mui/material';

declare module '@mui/material/Typography/Typography' {
    interface TypographyPropsVariantOverrides {
        menu: true;
        h1: true;
        h2: true;
        h3: true;
        paragraph14: true;
        paragraph16: true;
        primary500: true;
        primary400: true;
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: 'Inter',
        menu: {
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 500,
        },
        h1: {
            fontSize: '32px',
            lineHeight: '36px',
            fontWeight: 700,
        },
        h2: {
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 700,
        },
        h3: {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 600,
        },
        paragraph14: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400,
        },
        paragraph16: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 500,
        },
        primary500: {
            fontSize: '14px',
            lineHeight: '14px',
            fontWeight: 500,
        },
        primary400: {
            fontSize: '14px',
            lineHeight: '14px',
            fontWeight: 400,
        },
    },
    palette: {
        primary: {
            main: '#141C24',
            dark: '#637083',
            light: '#344051',
        },
        secondary: {
            main: '#9534D2',
            dark: '#7827ab',
            light: '#CED2DA',
            contrastText: '#F5F5F8',
        },
    },
});
