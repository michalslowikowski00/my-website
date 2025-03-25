import { Description } from '@/components/customs/Description';
import { Photo } from '@/components/customs/Photo';
import { Stats } from '@/components/customs/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <Description />
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
