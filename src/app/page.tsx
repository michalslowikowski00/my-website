import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Header withe Hello */}
          <div className="text-center xl:text-left">
            <span className="text-white text-xl">Software Developer</span>

            <h1 className="h1">
              Hello, I&apos;am Michał <br />
              <span className="text-emerald-600"> and good to see you</span>
            </h1>
            {/* Header withe Hello */}
            <p className="max-w-[500] mb-9 mt-6">
              Temporibus dolor esse minima aut. Fugit ratione voluptatem eos temporibus. Molestias
              sed totam voluptatibus a inventore qui aliquam animi. Impedit labore ut odit
              laboriosam veniam et natus magnam. Inventore ipsa commodi quam officia. Animi ut illo
              quibusdam.
            </p>
            <div className="flex xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="flex">
                <span>Get my resume!</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <FaGithub className="text-xl" />
                <FaGithub className="text-xl" />
                <FaGithub className="text-xl" />
              </div>
            </div>
          </div>
          {/* IMAGE */}
          <div className="flex items-center rounded-xl">
            <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="" className="rounded-xl" />
          </div>
          {/* SOCIALS */}
        </div>
      </div>
    </section>
  );
};
export default Home;
