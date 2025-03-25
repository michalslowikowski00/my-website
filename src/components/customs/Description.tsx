import { FiDownload } from 'react-icons/fi';
import { Button } from '../ui/button';
import { Socials } from './Socials';

const personDescription = `I am software developer with more than 5 years of expirience.
My journey with programming started over 10 years ago as a software tester. 
Now I work as fullstack enginner in Snowflake, 
but I fall in love with React and this is what I want to do the most.`;

export const Description = () => {
  return (
    <div className="text-center xl:text-left">
      <span className="text-white text-xl">Software Developer</span>
      <h1 className="h1">
        Hello, I&apos;m Michał <br />
        <span className="text-emerald-600"> and good to see you</span>
      </h1>
      <p className="max-w-[500] mb-9 mt-6 text-wrap">{personDescription}</p>
      <div className="flex items-center gap-8">
        <Button
          variant="outline"
          size="lg"
          className="flex 
                  rounded-full 
                  hover:bg-white
                  hover:text-emerald-600 
                  hover:transition-all 
                  duration-500"
        >
          <span>Get my resume!</span>
          <FiDownload className="text-xl" />
        </Button>
        <Socials />
      </div>
    </div>
  );
};
