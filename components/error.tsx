import styles from '../styles/Error.module.css';

interface Props {
  children: React.ReactNode;
}

function Error({ children }: Props) {
  return <div className={styles.error}>{children}</div>;
}

export default Error;
