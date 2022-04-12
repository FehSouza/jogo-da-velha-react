import { ThemeProvider } from 'styled-components';
import './AppStyles.js';
import { Home } from './pages/index';
import { GlobalStyle } from './styles/globalStyle.js';
import { theme } from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
