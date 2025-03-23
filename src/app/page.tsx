import { Photo } from '@/components/customs/Photo';
import { Socials } from '@/components/customs/Socials';
import { Stats } from '@/components/customs/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Header withe Hello */}
          <div className="text-center xl:text-left">
            <span className="text-white text-xl">Software Developer</span>
            <h1 className="h1">
              Hello, I&apos;m Michał <br />
              <span className="text-emerald-600"> and good to see you</span>
            </h1>
            {/* Header withe Hello */}
            <p className="max-w-[500] mb-9 mt-6">
              Temporibus dolor esse minima aut. Fugit ratione voluptatem eos temporibus. Molestias
              sed totam voluptatibus a inventore qui aliquam animi. Impedit labore ut odit
              laboriosam veniam et natus magnam. Inventore ipsa commodi quam officia. Animi ut illo
              quibusdam.
            </p>
            <div className="flex items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex rounded-full hover:bg-white hover:text-emerald-600 hover:transition-all duration-500"
              >
                <span>Get my resume!</span>
                <FiDownload className="text-xl" />
              </Button>
              <Socials />
            </div>
          </div>
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
