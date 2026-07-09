import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const ChatBubble = ({
  message,
  isUser = false,
  avatar,
  timestamp,
  variant = 'default',
}) => {
  const bubbleVariants = {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  return (
    <motion.div
      {...bubbleVariants}
      className={clsx('flex gap-3 mb-4', isUser ? 'flex-row-reverse' : 'flex-row')}
    >
      {avatar && (
        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
          {avatar}
        </div>
      )}
      
      <div className={clsx('flex flex-col', isUser ? 'items-end' : 'items-start')}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={clsx(
            'px-4 py-2.5 rounded-lg max-w-xs md:max-w-md lg:max-w-lg break-words shadow-sm',
            isUser
              ? 'bg-primary-500 text-white rounded-br-none'
              : 'bg-surface-100 text-surface-900 rounded-bl-none'
          )}
        >
          <p className="text-sm md:text-base leading-relaxed">{message}</p>
        </motion.div>
        
        {timestamp && (
          <span className="text-xs text-surface-500 mt-1.5">
            {timestamp}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ChatBubble;