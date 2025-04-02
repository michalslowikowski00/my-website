import { TabsContent } from '../ui/tabs';

export const AboutMe = () => {
  return (
    <TabsContent
      value="about me"
      className="w-full"
    ></TabsContent>
  );
};

const aboutMe = {
  title: 'About me',
  description: 'I love enduro MTB and programming.',
  info: [
    { filedName: 'Name', fieldValue: 'Michał Słowikowski' },
    { filedName: 'Expirience', fieldValue: '10+' },
    { filedName: 'Nationality', fieldValue: 'Polish' },
  ],
};
