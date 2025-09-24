import fetchImage from './api/fetch-image';
import { connection } from 'next/server';
import CatImage from './components/cat-image';

const CatGenerator = async () => {
  await connection();
  const catimage = await fetchImage();
  return (
    <div>
      <CatImage url={catimage.url}/>
    </div>
  );
};

export default CatGenerator;
