import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import Layout from '@components/Layout';
import {ThemeProvider, createTheme} from '@mui/material/styles';

import variables from './variables.scss';

import './styles.scss';

const theme = createTheme({
  palette: {
    primary: {
      light: '#FFEBED',
      main: '#D62828',
      dark: '#b71c1c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#275777',
      main: '#003049',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
