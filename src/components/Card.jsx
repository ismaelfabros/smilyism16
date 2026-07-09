import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Card = ({
  children,
  hoverable = true,
  className,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.15)' } : {}}
      className={clsx(
        'bg-white rounded-xl p-6 shadow-md transition-all duration-300',
        hoverable && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;