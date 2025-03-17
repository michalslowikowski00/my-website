'use client';

import { motion } from 'framer-motion';

const Work = () => {
  return <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={box} />;
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: '#9911ff',
  borderRadius: 5,
};

export default Work;
