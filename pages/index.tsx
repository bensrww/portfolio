import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {Button, Stack} from '@mui/material';

import styles from './index.module.scss';

const HomePage = () => {
  const {t} = useTranslation('index');

  return <h1>{t('title')}</h1>;
};

export const getStaticProps = async ({locale}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'])),
    },
  };
};

export default HomePage;
