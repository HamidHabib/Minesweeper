import {makeStyles} from '@mui/styles';
import Paper from '@mui/material/Paper';
import {
  createTheme,
  styled,
} from '@mui/material/styles';

export const useAppStyles = makeStyles({
  headText: {
    fontFamily: 'cursive',
    marginTop: '2rem',
    fontWeight: 'bold',
    fontSize: 32,
  },
  layout: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    background: '#330000',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    overflow: 'scroll',
    background: '#fff !important',
    maxWidth: '80%',
    height: '90%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: 2,
  },
  content: {
    // 'height': '100%',
    // 'width': '100%',
    'flex': 5,
    'display': 'flex',
    'flexDirection': 'column',
    'marginTop': -15,
    'marginBottom': 15,
    'marginLeft': 15,
    'marginRight': 15,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  smallContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  startButton: {
    minWidth: '150px !important',
  },
  levelSelector: {
    maxWidth: '150px !important',
    marginBottom: '15px !important',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const Item = styled(Paper)(({
  theme,
}) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

