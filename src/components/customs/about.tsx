import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';
import { TabsContent } from '../ui/tabs';
import Image from 'next/image';

const pictures = [
  '/assets/image1.png',
  '/assets/image2.png',
  '/assets/image3.png',
  '/assets/image.png',
];

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
      <div className="mx-10 py-11 max-w-lg w-full">
        <Carousel className="w-full ">
          <CarouselContent>
            {pictures.map((picture, index) => {
              return (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={picture}
                        priority
                        alt={'guitar'}
                        quality={100}
                        fill
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
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
