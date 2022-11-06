import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import SectionContainer from '@components/SectionContainer';
import {Button, Stack} from '@mui/material';

import styles from './index.module.scss';

const HomePage = () => {
  const {t} = useTranslation('index');

  const sections: JSX.Element[] = [
    <Stack key={1} direction="row" position="relative">
      <Stack spacing="130px" maxWidth={700}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.selfIntro}>{t('selfIntro')}</p>
        <Button variant="contained" className={styles.ctaButton}>
          Contact Me
        </Button>
      </Stack>
      <img className={styles.heroImage} src="/images/heroImage.svg" alt="hero" />
    </Stack>,
    <span key={2}>Other sections</span>,
  ];

  return (
    <>
      {sections.map((section, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <SectionContainer
            className={styles.sectionContainer}
            isAlternate={Boolean(index % 2)}
            key={`section_${index}`}
          >
            {section}
          </SectionContainer>
        );
      })}
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
