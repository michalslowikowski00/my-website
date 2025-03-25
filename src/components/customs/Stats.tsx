'use client';

import CountUp from 'react-countup';

const statistics = [
  { year: 10, text: 'Years of expirience' },
  { year: 7, text: 'Projects involved' },
  { year: 9, text: 'Technology stack' },
  { year: 100, text: 'Github commits' },
];

export const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:-pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-auto gap-6 max-w-[80vw] xl-max-w-none">
          {statistics.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-content xl:justify-start"
              >
                <CountUp
                  start={0}
                  end={stat.year}
                  duration={7}
                  delay={2}
                  className="text-8xl font-extrabold text-white/60"
                />
                <p
                  className={`${stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} 
              leading-7 text-white/70 text-xl`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
