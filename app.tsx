import variables from './styles.scss';
import Layout from './components/Layout';

const MyApp = ({Component, pageProps}: any) => {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
