import Header from './components/Header/Header';

export default function MovieflixLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
