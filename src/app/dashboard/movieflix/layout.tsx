import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Suspense } from 'react';
import styles from './layout.css';

export default function MovieflixLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layoutWrapper}>
            <Suspense fallback={null}>
                <Header />
            </Suspense>
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    );
}
