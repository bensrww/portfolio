import classNames from 'classnames';
import styles from './SectionContainer.module.scss';

interface SectionContainerProps {
  children: JSX.Element;
  isAlternate?: boolean;
  className?: string;
}

const SectionContainer = (props: SectionContainerProps) => {
  const {children, isAlternate = false, className} = props;

  return (
    <div
      className={classNames(
        styles.container,
        Boolean(isAlternate) && styles.isAlternate,
        className
      )}
    >
      {children}
    </div>
  );
};

SectionContainer.defaultProps = {
  isAlternate: false,
};

export default SectionContainer;
