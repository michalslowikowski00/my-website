import { FaPython, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { SiTypescript, SiKotlin, SiJest, SiPytest, SiSelenium, SiCypress } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { ScrollArea } from '../ui/scroll-area';
import { TabsContent } from '../ui/tabs';
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export const Skills = () => {
  return (
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
          {/* maybe divide this section to programming, tools, etc */}
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
  );
};

const skillSet = {
  title: 'Skill set',
  description: 'This thigs I know, well or enough',
  items: [
    {
      skill: 'typesctipt',
      icon: <SiTypescript />,
    },

    {
      skill: 'python',
      icon: <FaPython />,
    },
    {
      skill: 'Kotlin',
      icon: <SiKotlin />,
    },
    {
      skill: 'sql',
      icon: <TbSql />,
    },
    {
      skill: 'React',
      icon: <FaReact />,
    },
    {
      skill: 'Tailwind CSS',
      icon: <RiTailwindCssFill />,
    },
    {
      skill: 'Next.JS',
      icon: <RiNextjsFill />,
    },
    {
      skill: 'Jest',
      icon: <SiJest />,
    },
    {
      skill: 'Pytest',
      icon: <SiPytest />,
    },
    {
      skill: 'Selenium',
      icon: <SiSelenium />,
    },
    {
      skill: 'Cypress',
      icon: <SiCypress />,
    },
  ],
};
