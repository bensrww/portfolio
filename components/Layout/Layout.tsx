import Header from '@components/Header';

import styles from './Layout.module.scss';

const Layout = ({children}: any) => {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Layout;
