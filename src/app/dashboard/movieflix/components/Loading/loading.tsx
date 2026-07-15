import styles from './loading.css';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <span className={styles.label}>MOVIEFLIX</span>
    </div>
  );
};

export default Loading;
