import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  animated = false,
  className,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    neutral: 'bg-surface-100 text-surface-800',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <motion.span
      animate={animated ? { scale: [1, 1.05, 1] } : {}}
      transition={animated ? { duration: 2, repeat: Infinity } : {}}
      className={clsx(
        'inline-block rounded-full font-medium',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;