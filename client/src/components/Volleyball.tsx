import React from 'react';
import { useThemeKey } from '../helpers/hooks';
import { theme } from '../helpers/theme';
import SVGFloatWrapper from './SVGFloatWrapper';

type VolleyballProps = {
  svgTransitionSize?: Sizes['keys'];
  y?: number;
  duration?: number;
};

export default function Volleyball({
  svgTransitionSize,
  y,
  duration,
}: VolleyballProps) {
  const themeKey = useThemeKey();
  return (
    <SVGFloatWrapper
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 273 274'
      svgTransitionSize={svgTransitionSize}
      y={y}
      duration={duration}
      className={`svg svg--volleyball`}
    >
      <path
        d='M271.05 115.15c-4.9-35.7-23-64.4-51.4-86.3-36-27.79998-76.7-33.49998-120.2-22.89998-14.6 3.5-27.4 10.89998-39.9 19.19998-23.7 15.6-39.4 37.3-50.00001 63-9.900004 24-11.4 49.1-6.3 74.4C12.15 207.25 37.05 239.85 78.15 259.85c13.4 6.5 27.4 11.4 42.5 12.5 2.8.2 5.5.6 8.3 1h15.4c2.8-.3 5.6-.4 8.4-.8 23.7-2.7 45.4-10.9 64.4-25.4 43.8-33.4 61.3-77.9 53.9-132zm-62.6-86.8c18.4 11.7 32.6 27.3 42.7 46.5 3.4 6.5 9.1 20.1 8.8 20.3-17.7-27.8-42.1-47.8-72.6-61.1 1.1-.7 8.2-5.5 10.7-7.2 3.7-2.5 6.8-.7 10.4 1.5zm-66.5-20.59998c1-.5 2.4-.5 3.6-.5 14.2.3 27.6 4.29998 40.7 9.39998 3.5 1.4 7 2.9 10 4.1-7.3 4.7-15.1 8.9-22 14.3-21 16.1-35.4 36.6-40.9 62.8-2.3 11.2-2.5 22.6-.5 33.8.6 3.3-.2 5.1-2.8 7.1-13.4 10.4-28.3 17-45.2 19-1.4.2-2.8.2-4.7.2-1-7.5-2.2-14.8-2.9-22.1-1.3-13.9-1.2-27.8 1.1-41.6 5.1-32 19.2-58.5 46.6-77 5.3-3.6 11.2-6.4 17-9.49998zM55.75 37.85c5.9-7.8 14.4-12.8 22.9-17.4 13.6-7.3 28.3-11.09998 43.5-12.59998 1.9-.2 3.7-.4 5.2-.6-7 5.59998-14.5 10.79998-21 16.99998-16.7 15.7-26.6 35.5-31.9 57.6-5 20.9-5.4 42-2.6 63.2.6 4.4 1.4 8.8 2.1 13.4-7.9.2-15.6-.5-23.2-2.4-6.4-1.6-12.6-3.9-18.8-6.1-.9-.3-1.9-1.6-2.1-2.5-6.1-40 1.1-77 25.9-109.6zm-32.3 35.5c4.5-7.7 9.7-14.9 15-22-7.1 14.5-12.2 29.7-15 45.6-2.7 15.9-2.8 31.9-.7 48.8-5.5-3.7-10.3-6.9-15.00001-10.2-.8-.6-1.2-2.1-1.1-3.1.6-21.1 6.20001-40.9 16.80001-59.1zm-3 122.1c-8.1-16.1-12.60001-33.1-13.80001-51.1 0-.3.1-.5.1-1 .6.4 1.2.6 1.7 1C23.35 155.15 40.05 161.15 58.15 163.65c16.9 2.3 33.4 1.1 49.5-4.6 10-3.5 18.5-9.4 26.6-16 2.1-1.7 3.8-2.2 6.5-1.2 16.5 6.4 30.2 16.4 40.7 30.7.6.8 1 1.6 1.8 2.6-24.4 21-51 36.8-83.1 41.7-18.4 2.8-36.6 1.1-53.7-6.3-8.5-3.7-16.4-8.9-24.6-13.5-.5-.3-1.1-1-1.4-1.6zm68.4 61c-7.7-1.6-15.2-5.7-22.2-9.8-15.6-9-27.9-21.6-37.8-36.6 6.6 2.8 13 6.2 19.6 8.2 31 9.6 61.3 7.5 90.9-6.3 17-7.9 32.4-18 46.4-30.4.2-.2.5-.3 1.3-.8 2.6 5.6 5.6 11 7.5 16.7 2.5 7.6 4 15.5 5.9 23.3.5 1.8-.2 3.1-1.7 4.4-19.3 15.5-40.8 26.2-65.3 30.7-14.8 2.8-29.9 3.6-44.6.6zm112.2-10.6c-1.2 5.8-4.2 7.3-6.4 8.5-20.1 9.5-41.2 13.8-63.3 12.8-6.5-.3-19.5-2.4-19.5-2.4 33-1.8 62.7-12.3 89.7-33.2-.2 4.1-.2 12.7-.5 14.3zm45.3-40.3c0 1.2-.4 2.7-1.1 3.7-9.6 14.6-21.9 26.5-36.2 36.5-.3.2-.6.4-1 .6-.1.1-.3 0-.6 0 0-4.3.1-8.6 0-12.9-.6-24.9-7.6-47.7-23.2-67.4-10.5-13.2-23.6-23.2-39.5-29.1-3.6-1.4-5.2-3.3-5.7-7.2-2.4-16.9-.3-33.2 6.5-48.8.9-2.2 1.9-3 4.4-2.1 29.4 10.3 54.9 26.3 74.8 50.5 13.1 16 20.8 34.2 21.6 55 .1 7.1 0 14.2 0 21.2zm20.7-62.2c-.6 17.3-5.1 33.7-12.5 49.4-.2.3-.4.6-1 1.7 0-12.9-1.9-24.7-6.1-36.1-10-27.1-27.9-48-51.5-64.3-13-9-27.3-15.3-42.3-20.3-1.2-.4-2.5-.9-4.1-1.6 1.3-2.2 2.5-4.2 3.8-6.1 6.7-10.1 15.1-18.7 24.7-26 1.6-1.2 2.8-1.3 4.6-.6 19.1 7.1 35.7 18.2 50.2 32.3 12 11.6 21.8 24.8 28.8 40.1 4.8 10.1 5.7 20.7 5.4 31.5z'
        fill={theme[themeKey].background.opposite() || `#120D17`}
      />
    </SVGFloatWrapper>
  );
}
