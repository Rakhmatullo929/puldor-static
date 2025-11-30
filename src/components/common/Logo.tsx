import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../../assets/logo.png';

interface LogoProps {
  variant?: 'default' | 'large' | 'small';
  className?: string;
  onClick?: () => void;
}

/**
 * Logo component for Puldor project.
 * Uses the actual logo.png image with responsive sizing.
 */
const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  className = '',
  onClick
}) => {
  // Size variants for logo image
  const sizes = {
    small: {
      width: 'h-10',
      height: 'h-10',
    },
    default: {
      width: 'h-14 md:h-16',
      height: 'h-14 md:h-16',
    },
    large: {
      width: 'h-20 md:h-28 lg:h-36',
      height: 'h-20 md:h-28 lg:h-36',
    },
  };

  const size = sizes[variant];

  return (
    <motion.div
      className={`flex items-center ${className}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={logoImage}
        alt="Puldor Logo"
        className={`${size.width} ${size.height} object-contain w-auto`}
        style={{
          filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))',
        }}
      />
    </motion.div>
  );
};

export default Logo;

