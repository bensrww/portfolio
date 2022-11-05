import styles from './SectionContainer.module.scss';

interface SectionContainerProps {
  children: JSX.Element;
}

const SectionContainer = (props: SectionContainerProps) => {
  const {children} = props;
  return <div className={styles.container}>{children}</div>;
};

export default SectionContainer;
