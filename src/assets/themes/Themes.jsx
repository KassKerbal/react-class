import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        red: {
            main: '#ff0000',
            contrastText: '#fff',
        },
        green: {
            main: 'green',
            contrastText: '#fff',
        },
    },
});

export default Theme;