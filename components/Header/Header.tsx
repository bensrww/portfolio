import FiveGSharpIcon from '@mui/icons-material/FiveGSharp';
import {
  Avatar,
  ClickAwayListener,
  Grow,
  IconButton,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import {useTranslation} from 'next-i18next';
import React, {useRef, useState} from 'react';

import styles from './Header.module.scss';

const Header = () => {
  const {t} = useTranslation('index');
  const menuAnchorRef = useRef<HTMLButtonElement>(null);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleLanguageClick = () => {
    setIsMenuVisible(prev => !prev);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setIsMenuVisible(false);
    } else if (event.key === 'Escape') {
      setIsMenuVisible(false);
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.row}>
        <div className={styles.brandIcon}>
          <FiveGSharpIcon color="primary" fontSize="inherit" />
        </div>

        <nav id={styles.nav}>
          <div className={styles.navContainer}>
            <IconButton
              title={t('selectLanguage')}
              ref={menuAnchorRef}
              onClick={handleLanguageClick}
              size="small"
              aria-controls={isMenuVisible ? 'language-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuVisible ? 'true' : undefined}
            >
              <Avatar sx={{width: 32, height: 32}}>M</Avatar>
            </IconButton>
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
        <Popper
          open={isMenuVisible}
          anchorEl={menuAnchorRef?.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleLanguageClick}>
                  <MenuList
                    autoFocusItem={isMenuVisible}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleLanguageClick}>
                      <Avatar />
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLanguageClick}>
                      <Avatar />
                      My account
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </header>
  );
};

export default Header;
