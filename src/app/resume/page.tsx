'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { FaHtml5 } from 'react-icons/fa';

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
            <TabsTrigger value="skills">skills</TabsTrigger>
            <TabsTrigger value="about me">about me</TabsTrigger>
          </TabsList>

          {/* TABS CONTENT */}
          <div className="min-h-[70vh] w-full">
            {/* EXP */}
            <TabsContent
              value="experience"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expirience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {expirience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid lg:grid-cols-2 gap-5 w-max-[50px]">
                    {expirience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] px-10 py-6 rounded-xl flex flex-col items-center lg:items-start gap-1 "
                        >
                          <span className="text-emerald-600 capitalize">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                            {item.company}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-600"></span>
                            <p className="text-white/60">{item.position}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILL */}
            <TabsContent
              value="skills"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skillSet.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skillSet.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid lg:grid-cols-4 gap-5 w-max-[50px]">
                    {skillSet.items.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="text-5xl">
                                {item.icon}
                              </TooltipTrigger>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ABOUT */}
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
  description: 'I love enduro MTB and programming.',
  info: [
    { filedName: 'Name', fieldValue: 'Michał Słowikowski' },
    { filedName: 'Expirience', fieldValue: '10+' },
    { filedName: 'Nationality', fieldValue: 'Polish' },
  ],
};

const expirience = {
  title: 'My expirience',
  description: 'Yo, yo, check this out, man!',
  items: [
    {
      company: 'Snowflake',
      position: 'Full Stack Engineer',
      duration: '2021 - present',
    },
    {
      company: 'Polidea',
      position: 'Junior Software Engineer',
      duration: '2020 - 2021',
    },
    {
      company: 'Polidea',
      position: 'Automation Test Engineer',
      duration: '2018 - 2020',
    },
    {
      company: 'GOG (CD PROJEKT)',
      position: 'Full Stack Engineer',
      duration: '2017 - 2018',
    },
    {
      company: 'SeaChange',
      position: 'Full Stack Engineer',
      duration: '2016 - 2017',
    },
  ],
};

const skillSet = {
  title: 'Skill set',
  description: 'This thigs I know, well or enough',
  items: [
    {
      skill: 'typesctipt',
      icon: <FaHtml5 />,
    },

    {
      skill: 'python',
      icon: '',
    },
    {
      skill: 'Kotlin',
      icon: '',
    },
    {
      skill: 'sql',
      icon: '',
    },
    {
      skill: 'React',
      icon: '',
    },
    {
      skill: 'Tailwind CSS',
      icon: '',
    },
    {
      skill: 'Shadcn',
      icon: '',
    },
    {
      skill: 'Next.JS',
      icon: '',
    },
    {
      skill: 'Express',
      icon: '',
    },
    {
      skill: 'Playwright',
      icon: '',
    },
    {
      skill: 'Jest',
      icon: '',
    },
    {
      skill: 'Pytest',
      icon: '',
    },
    {
      skill: 'Selenium',
      icon: '',
    },
    {
      skill: 'Cypress',
      icon: '',
    },
  ],
};
