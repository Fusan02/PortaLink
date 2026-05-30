import Header from './components/Header/Header';
import { Suspense } from 'react';

export default function MovieflixLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      {children}
    </>
  );
}
