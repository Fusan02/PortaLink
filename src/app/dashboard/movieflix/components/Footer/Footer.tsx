import styles from './Footer.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrap}>
        <div className={styles.tmdbCredit}>
          <Image src='/TMDB.svg' alt='TMDb Logo' width={70} height={30} className='tmdb-logo' />
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </div>
        <div className={styles.mfCrefit}>&copy; 2026 Fusan. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
