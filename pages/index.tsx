import SectionContainer from '@components/SectionContainer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button} from '@mui/material';

import {useState} from 'react';

const Header = ({title}: {title: string}) => {
  return <h1>{title.length > 0 ? title : 'Default title'}</h1>;
};

const HomePage = () => {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <SectionContainer>
        <h1>Hello World</h1>
      </SectionContainer>
    </>
  );
};

export default HomePage;
