import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CardContent } from '../ui/card';
import { TabsContent } from '../ui/tabs';

const params = ['tHyfAwEmzxE', 'fhOLSQtpygg', 'M28RCeAZnnE', 'uFPaGN3Hwmk'];

export const AboutMe = () => {
  return (
    <TabsContent
      value="about me"
      className="w-full"
    >
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">What&apos;s up?</h3>
        <p className="max-w-[600px] text-2xl text-white/60 mx-auto xl:mx-0">
          Here you can see what I do in the free time...
        </p>
      </div>
      <div className="mx-10 py-11 max-w-lg w-full">
        <Carousel className="w-3xl">
          <CarouselContent>
            {params.map((param, index) => {
              return (
                <CarouselItem key={index}>
                  <CardContent className="flex aspect-video items-center justify-center p-6 w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${param}`}
                      allow="autoplay; encrypted-media"
                      title="video"
                    />
                  </CardContent>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </TabsContent>
  );
};
