import {useTranslation} from 'next-i18next';
import SectionContainer from '@components/SectionContainer';
import {Button, Stack} from '@mui/material';

import styles from './index.module.scss';

const HomePage = () => {
  const {t} = useTranslation('index');
  return (
    <>
      <SectionContainer>
        <Stack spacing="130px" maxWidth={700}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.selfIntro}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Button variant="contained" className={styles.ctaButton}>
            Contact Me
          </Button>
        </Stack>
        <img className={styles.heroImage} src="/images/heroImage.svg" width={950} alt="hero" />
      </SectionContainer>
      <span>Other sections</span>
    </>
  );
};

export default HomePage;
