import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Loader = ({ size = 'md', variant = 'dots' }) => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (variant === 'dots') {
    return (
      <div className="flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [-4, 4, -4] }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={clsx(sizeMap[size], 'bg-primary-500 rounded-full')}
          />
        ))}
      </div>
    );
  }

  if (variant === 'spinner') {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={clsx(
          sizeMap[size],
          'border-4 border-primary-200 border-t-primary-500 rounded-full'
        )}
      />
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className={clsx(sizeMap[size], 'bg-primary-500 rounded-full')}
      />
    );
  }
};

export default Loader;