'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Photo = () => {
  return (
    <div className="h-full relative">
      <motion.div
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
      >
        <motion.div
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' } }}
        >
          <Image
            src="/assets/img1.png"
            priority
            alt={'guitar'}
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="w-[290px] xl:w-[515px] h-[300px] xl:h-[515px]"
          fill="transparent"
          viewBox="0 0 503 503"
        >
          <motion.circle
            cx="244"
            cy="244"
            r="240"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: '24 10 0 0',
            }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeateType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
