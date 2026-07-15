import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Suspense } from 'react';

export default function MovieflixLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Header />
      {children}
      <Footer />
    </>
  );
}
