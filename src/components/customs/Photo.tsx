'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Photo = () => {
  return (
    <div className="h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image src="/assets/img.png" alt={'guitar'} width={500} height={500}></Image>
        </div>
      </motion.div>
    </div>
  );
};
