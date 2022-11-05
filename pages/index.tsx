import SectionContainer from '@components/SectionContainer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button, Stack} from '@mui/material';

import {useState} from 'react';

const Header = ({title}: {title: string}) => {
  return <h1>{title.length > 0 ? title : 'Default title'}</h1>;
};

const HomePage = () => {
  return (
    <>
      <SectionContainer>
        <Stack maxWidth={700}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Button>Contact Me</Button>
        </Stack>
      </SectionContainer>
      <span>Other sections</span>
    </>
  );
};

export default HomePage;
