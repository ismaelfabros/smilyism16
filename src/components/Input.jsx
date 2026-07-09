import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Input = React.forwardRef(({
  label,
  error,
  placeholder,
  type = 'text',
  className,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-surface-900 mb-2">
          {label}
        </label>
      )}
      
      <motion.input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={clsx(
          'w-full px-4 py-2.5 rounded-lg border-2 border-surface-200',
          'focus:border-primary-500 focus:outline-none',
          'placeholder:text-surface-400',
          'transition-colors duration-200',
          error && 'border-red-500 focus:border-red-500',
          className
        )}
        whileFocus={{ scale: 1.01 }}
        {...props}
      />
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;