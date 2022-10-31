import type {AppProps} from 'next/app';
import Layout from '@components/Layout';
import variables from './variables.scss';
import './styles.scss';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
