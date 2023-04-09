import { createTheme as functionTheme} from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const createTheme = functionTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
  },
});