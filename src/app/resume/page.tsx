'use client';

import { Exp } from '@/components/customs/Exp';
import { Skills } from '@/components/customs/Skills';
import { AboutMe } from '@/components/customs/about';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:mx-0">
            <TabsTrigger
              value="experience"
              className="capitalize"
            >
              experience
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="capitalize"
            >
              skills
            </TabsTrigger>
            <TabsTrigger
              value="about me"
              className="capitalize"
            >
              about me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <Exp />
            <Skills />
            <AboutMe />
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
