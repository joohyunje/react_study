import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './global/globalStyle';
import theme from './global/theme';
import CountContainer from './pages/docs/count/CountContainer';
import FontContainer from './pages/docs/font/FontContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FontContainer />
      </ThemeProvider>
    </>
  );
}

export default App;