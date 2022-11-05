import SectionContainer from '@components/SectionContainer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button, Stack} from '@mui/material';

import styles from './index.module.scss';

const Header = ({title}: {title: string}) => {
  return <h1>{title.length > 0 ? title : 'Default title'}</h1>;
};

const HomePage = () => {
  return (
    <>
      <SectionContainer>
        <Stack spacing="130px" maxWidth={700}>
          <h1 className={styles.title}>Hello World</h1>
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
