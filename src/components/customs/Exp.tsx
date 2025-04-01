import { ScrollArea } from '../ui/scroll-area';
import { TabsContent } from '../ui/tabs';

export const Exp = () => {
  return (
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
  );
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
