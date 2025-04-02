import { TabsContent } from '../ui/tabs';

export const AboutMe = () => {
  return (
    <TabsContent
      value="about me"
      className="w-full"
    >
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">Hey there...</h3>
        <p className="max-w-[600px] text-2xl text-white/60 mx-auto xl:mx-0">
          Here you can read a bit about me
        </p>
      </div>
    </TabsContent>
  );
};
