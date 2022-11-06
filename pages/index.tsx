import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import SectionContainer from '@components/SectionContainer';
import {Button, Stack} from '@mui/material';

import styles from './index.module.scss';

const HomePage = () => {
  const {t} = useTranslation('index');
  return (
    <>
      <SectionContainer>
        <Stack direction="row" position="relative">
          <Stack spacing="130px" maxWidth={700}>
            <h1 className={styles.title}>{t('title')}</h1>
            <p className={styles.selfIntro}>{t('selfIntro')}</p>
            <Button variant="contained" className={styles.ctaButton}>
              Contact Me
            </Button>
          </Stack>
          <img className={styles.heroImage} src="/images/heroImage.svg" alt="hero" />
        </Stack>
      </SectionContainer>

      <SectionContainer isAlternate>
        <span>Other sections</span>
      </SectionContainer>
    </>
  );
};

export const getStaticProps = async ({locale}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'])),
    },
  };
};

export default HomePage;
