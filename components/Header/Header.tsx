import FiveGSharpIcon from '@mui/icons-material/FiveGSharp';
import {Link} from '@mui/material';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.brandIcon}>
        <FiveGSharpIcon fontSize="inherit" />
      </div>
      <nav id={styles.nav}>
        <div className={styles.navContainer}>
          <Link underline="none" href="/">
            Home
          </Link>
          <Link underline="none" href="/">
            About
          </Link>
          <Link underline="none" href="/">
            Projects
          </Link>
          <Link underline="none" href="/">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
