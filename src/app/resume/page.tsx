import { Button } from '@/components/ui/button';

const Categories = () => {
  const categories = ['expirience', 'education', 'skills', 'about me'];

  return (
    <>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <Button
              // variant="outline"
              size="lg"
              className="bg-gray-600 capitalize hover:bg-emerald-600 w-64 mb-5"
            >
              <span>{category}</span>
            </Button>
          </div>
        );
      })}
    </>
  );
};

const Resume = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div>
            <Categories />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
