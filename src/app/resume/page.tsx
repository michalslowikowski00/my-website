'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
            <TabsTrigger value="experience">experience</TabsTrigger>
            <TabsTrigger value="education">education</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
            <TabsTrigger value="about me">about me</TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent
              value="experience"
              className="w-full"
            >
              expierience
            </TabsContent>
            <TabsContent
              value="education"
              className="w-full"
            >
              education
            </TabsContent>
            <TabsContent
              value="skills"
              className="w-full"
            >
              skills
            </TabsContent>
            <TabsContent
              value="about me"
              className="w-full"
            >
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

const aboutMe = {
  title: 'About me',
  description: 'Nothing',
  info: [
    { filedName: 'Name', fieldValue: 'Michał Słowikowski' },
    { filedName: 'Expirience', fieldValue: '10+' },
    { filedName: 'Nationality', fieldValue: 'Polish' },
  ],
};

const expirience = {
  icon: '',
  title: 'My expirience',
  description: 'Nothing',
  items: [
    {
      company: 'Snowflake',
      position: 'Full Stack Engineer',
      duration: '2020 - present',
    },
    {
      company: 'Snowflake',
      position: 'Full Stack Engineer',
      duration: '2020 - present',
    },
    {
      company: 'Snowflake',
      position: 'Full Stack Engineer',
      duration: '2020 - present',
    },
  ],
};
