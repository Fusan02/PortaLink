import styles from './loading.css';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <span className={styles.label}>MOVIEFLIX</span>
    </div>
  );
}
