import { Container } from '@mui/material';
import {green, yellow, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: yellow[500],
        },
        secondary: {
            main: green[500],
        },  
    },
    status: {
        danger: orange[500],
    }
});

const CustContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: theme.palette.secondary.main
}));

const Problem3 = () => {
    return (
        <ThemeProvider theme={theme}>
            <CustContainer sx={{height:"600px"}}>
                Theme
            </CustContainer>
            {/* <Checkbox color="secondary"/> */}
        </ThemeProvider>
    );
}

export { Problem3 };
