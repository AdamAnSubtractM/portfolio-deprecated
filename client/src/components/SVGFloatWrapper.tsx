import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../helpers/hooks';

type WrapperProps = {
  children: React.ReactNode;
  xmlns: string;
  viewBox: string;
  fill?: string;
  y?: number;
  duration?: number;
  svgTransitionSize?: Sizes[`keys`];
  className?: string;
};

export default function SVGFloatWrapper({
  children,
  y,
  duration,
  svgTransitionSize,
  ...svgProps
}: WrapperProps) {
  return (
    <>
      {useIsMobile(svgTransitionSize || `md`) ? (
        <svg {...svgProps}>{children}</svg>
      ) : (
        <motion.svg
          animate={{ y: y || 100 }}
          transition={{
            delay: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: duration || 10,
          }}
          {...svgProps}
        >
          {children}
        </motion.svg>
      )}
    </>
  );
}
