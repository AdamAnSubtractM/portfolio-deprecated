import { useState, useEffect } from 'react';
import { sizes } from '../theme';

/**
 * returns the current width and height of the window. updates on resize
 */
const useWindowSize = function () {
  // initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // handler to call on window resize
    const handleResize = function () {
      // set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // add event listener
    window.addEventListener('resize', handleResize);

    // call handler right away so state gets updated with initial window size
    handleResize();

    // remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * returns whether the current window size is a "mobile" screensize
 */
const useIsMobile = function () {
  // grab current window width
  const width = useWindowSize().width;
  return Boolean(width && width < sizes.lg);
};

export { useWindowSize, useIsMobile };
