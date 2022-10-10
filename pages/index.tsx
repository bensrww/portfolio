import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button} from '@mui/material';

import {useState} from 'react';

function Header({title}: {title: string}) {
  return <h1>{title.length > 0 || 'Default title'}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. " />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>


      <Button variant="contained" onClick={handleClick}>
        Like ({likes})
      </Button>
    </div>
  );
}

export default HomePage;
