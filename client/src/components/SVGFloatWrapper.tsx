import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../helpers/hooks';

type WrapperProps = {
  children: React.ReactNode;
  xmlns: string;
  viewBox: string;
  fill?: string;
};

export default function SVGFloatWrapper({
  children,
  ...svgProps
}: WrapperProps) {
  return (
    <>
      {useIsMobile(`md`) ? (
        <svg {...svgProps}>{children}</svg>
      ) : (
        <motion.svg
          animate={{ y: 100 }}
          transition={{
            delay: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 10,
          }}
          {...svgProps}
        >
          {children}
        </motion.svg>
      )}
    </>
  );
}
