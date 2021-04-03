import React from 'react';
import SVGFloatWrapper from './SVGFloatWrapper';

type BookProps = {
  svgTransitionSize?: Sizes['keys'];
  y?: number;
  duration?: number;
};

export default function Book({ svgTransitionSize, y, duration }: BookProps) {
  return (
    <SVGFloatWrapper
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 253 217'
      svgTransitionSize={svgTransitionSize}
      y={y}
      duration={duration}
      className={`svg svg--book`}
    >
      <path
        d='M17.5565 17.1597c7.5432-7.54496 70.2926-23.36927 108.8105 7.9455 7.676-10.6831 65.085-34.51969 110.278-6.944V180.41c-31.775-12.886-69.291-16.892-110.011 7.212-39.2522-23.37-84.7121-21.834-110.8132-6.677 0-.067 1.5354-163.585 1.7357-163.7853z'
        fill='#fff'
      />
      <path
        d='M3.60475 208.988c.93457.534 2.0694.601 3.00396.133 16.15459-8.012 34.17839-12.285 52.20209-12.285 22.1626 0 43.8582 6.276 62.5492 18.161.467.334 1.068.467 1.669.467h6.742c.601 0 1.135-.2 1.669-.467 18.758-11.885 40.386-18.161 62.549-18.161 18.024 0 36.047 4.273 52.202 12.285.935.468 2.136.401 3.004-.133.935-.534 1.469-1.536 1.469-2.671V26.04c0-1.2018-.668-2.2701-1.736-2.8043-2.737-1.3354-5.541-2.604-8.344-3.7391v-3.2049c0-1.2018-.668-2.2701-1.736-2.8043-15.621-7.74523-33.044-11.88492-50.466-11.88492-21.495 0-42.39 6.076-60.547 17.56032l-1.469.9348-1.468-.9348C106.741 7.67848 85.8464 1.60248 64.3515 1.60248c-17.423 0-34.9127 4.13969-50.4665 11.88492-1.0681.5342-1.7357 1.6025-1.7357 2.8043v3.2049c-2.8704 1.1351-5.60734 2.4037-8.34428 3.7391-1.06808.5342-1.73562 1.6025-1.73562 2.8043v180.344c.06675 1.068.60079 2.07 1.53535 2.604zM8.34433 27.9763c1.26834-.6009 2.60347-1.2018 3.87177-1.736V181.612c0 1.069.534 2.07 1.4686 2.671.9346.534 2.0694.601 3.004.134.4672-.201.9345-.468 1.4018-.668v5.809c0 1.068.534 2.07 1.4686 2.671.9346.534 2.0694.601 3.004.133 13.9517-6.944 29.5723-10.616 45.1261-10.616 19.1586 0 37.9168 5.408 54.0708 15.691l2.938 1.869s.066 0 .066.067l.067.067c.067 0 .067.066.134.066.066 0 .133.067.133.067.067 0 .134.067.267.067.067 0 .134.067.134.067.066 0 .2.067.267.067h1.068c.067 0 .2-.067.267-.067s.133 0 .133-.067c.067 0 .134-.067.267-.067.067 0 .134-.067.134-.067.067 0 .067-.066.133-.066l.067-.067s.067 0 .067-.067l2.937-1.869c16.221-10.283 34.913-15.691 54.071-15.691 15.554 0 31.175 3.672 45.126 10.616.935.468 2.537.935 3.405.401.934-.534 1.602-1.87 1.602-3.005l-.134-5.809c.468.201.535.267 1.002.468.934.467 2.47.667 3.338.133.934-.534 1.134-1.803 1.134-2.938V26.1736c-2.603-1.736 2.604 1.135 3.872 1.736V201.376c-15.821-7.078-33.177-10.817-50.466-10.817-23.097 0-45.594 6.41-65.153 18.629h-5.006c-19.56-12.152-42.0559-18.629-65.153-18.629-17.2894 0-34.6456 3.739-50.46644 10.817V27.9763h.33377zM64.4182 7.81202c20.2934 0 40.0528 5.74218 57.2088 16.55878l1.669 1.0683V183.482c-17.757-10.817-38.0503-16.492-58.8778-16.492-15.7541 0-31.5749 3.338-45.9939 9.748V18.228C32.7098 11.4176 48.5974 7.81202 64.4182 7.81202zM234.375 18.228v158.443c-14.419-6.409-30.239-9.748-45.993-9.748-20.828 0-41.121 5.675-58.878 16.492V25.4391l1.669-1.0683c17.156-10.8166 36.915-16.55878 57.209-16.55878 15.82 0 31.708 3.60558 45.993 10.41598zM24.2987 180.945c12.6834-5.142 26.4348-7.812 40.1195-7.812 20.2934 0 40.0528 5.742 57.2088 16.558l1.669 1.069v.2c-16.756-10.149-35.9142-15.49-55.6068-15.49-14.8863 0-29.7726 3.138-43.3905 9.147v-3.672zm105.2053 9.815l1.669-1.069c17.156-10.816 36.915-16.558 57.209-16.558 13.684 0 27.369 2.67 40.119 7.812v3.672c-13.618-6.009-28.504-9.147-43.39-9.147-19.626 0-38.785 5.341-55.607 15.49v-.2z'
        fill='#45404A'
      />
      <path
        d='M123.296 190.96v-.2l-1.669-1.069c-17.156-10.816-36.9154-16.558-57.2088-16.558-13.6847 0-27.3694 2.67-40.1195 7.812v3.672c13.6179-6.009 28.5042-9.147 43.3905-9.147 19.6926 0 38.8508 5.341 55.6068 15.49zm105.205-6.343v-3.672c-12.683-5.142-26.435-7.812-40.119-7.812-20.294 0-40.053 5.742-57.209 16.558l-1.669 1.069v.2c16.755-10.149 35.914-15.49 55.607-15.49 14.886 0 29.772 3.138 43.39 9.147z'
        fill='#E5E5E5'
      />
      <path
        d='M113.416 37.7914c-14.8862-8.5465-31.7751-13.0868-48.9978-13.0868-12.0826 0-24.4989 2.3369-35.8472 6.8105-1.0013.4006-1.4686 1.5356-1.0681 2.5372.4005 1.0015 1.5354 1.4689 2.5367 1.0683 10.881-4.2732 22.7633-6.5434 34.4454-6.5434 16.4884 0 32.7765 4.34 47.062 12.5526.334.2003.668.2671.935.2671.667 0 1.335-.3338 1.668-1.0015.468-.868.201-2.0699-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M113.416 47.4062c-14.8862-8.5465-31.7751-13.0868-48.9978-13.0868-12.0826 0-24.4989 2.3369-35.8472 6.8105-1.0013.4006-1.4686 1.5357-1.0681 2.5372.4005 1.0015 1.5354 1.4689 2.5367 1.0683 10.881-4.2732 22.7633-6.5434 34.4454-6.5434 16.4884 0 32.7765 4.34 47.062 12.5526.334.2003.668.2671.935.2671.667 0 1.335-.3338 1.668-1.0015.468-.868.201-2.0699-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M113.416 57.0209c-14.8862-8.5464-31.7751-13.0868-48.9978-13.0868-12.0826 0-24.4989 2.337-35.8472 6.8105-1.0013.4006-1.4686 1.5357-1.0681 2.5372.4005 1.0016 1.5354 1.469 2.5367 1.0683 10.881-4.2732 22.7633-6.5433 34.4454-6.5433 16.4884 0 32.7765 4.34 47.062 12.5526.334.2003.668.2671.935.2671.667 0 1.335-.3339 1.668-1.0016.468-.868.201-2.0698-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M29.3053 64.0317c.267 0 .4673-.0668.7343-.1335 10.881-4.2733 22.7633-6.5434 34.4454-6.5434 7.1427 0 14.3522.8012 21.2947 2.4705 1.0681.267 2.0694-.4007 2.3364-1.469.267-1.0683-.4005-2.0698-1.4686-2.3369-7.2762-1.6692-14.7528-2.5372-22.2293-2.5372-12.0826 0-24.4989 2.3369-35.8472 6.8104-1.0013.4007-1.4686 1.5357-1.0681 2.5373.267.7344 1.0013 1.2018 1.8024 1.2018zm84.1107 17.8274c-14.8862-8.5465-31.7751-13.0868-48.9978-13.0868-12.0826 0-24.4989 2.337-35.8472 6.8105-1.0013.4006-1.4686 1.5357-1.0681 2.5372.4005 1.0016 1.5354 1.4689 2.5367 1.0683 10.881-4.2732 22.7633-6.5434 34.4454-6.5434 16.4884 0 32.7765 4.34 47.062 12.5527.334.2003.668.267.935.267.667 0 1.335-.3338 1.668-1.0015.468-.868.201-2.0698-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M113.416 91.4739c-14.8862-8.5465-31.7751-13.0868-48.9978-13.0868-12.0826 0-24.4989 2.3369-35.8472 6.8104-1.0013.4007-1.4686 1.5357-1.0681 2.5373.4005 1.0015 1.5354 1.4689 2.5367 1.0683 10.881-4.2732 22.7633-6.5434 34.4454-6.5434 16.4884 0 32.7765 4.34 47.062 12.5526.334.2003.668.2671.935.2671.667 0 1.335-.3339 1.668-1.0015.468-.868.201-2.0699-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M113.416 101.089c-14.8862-8.5469-31.7751-13.0872-48.9978-13.0872-12.0826 0-24.4989 2.337-35.8472 6.8105-1.0013.4006-1.4686 1.5357-1.0681 2.5372.4005 1.0016 1.5354 1.4689 2.5367 1.0683 10.881-4.2732 22.7633-6.5434 34.4454-6.5434 16.4884 0 32.7765 4.34 47.062 12.5526.334.2.668.267.935.267.667 0 1.335-.334 1.668-1.001.468-.868.201-2.07-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M29.3053 108.166c.267 0 .4673-.067.7343-.133 10.881-4.274 22.7633-6.544 34.4454-6.544 1.068 0 1.9358-.868 1.9358-1.9361 0-1.0683-.8678-1.9363-1.9358-1.9363-12.0826 0-24.499 2.3369-35.8473 6.8104-1.0013.401-1.4686 1.536-1.068 2.537.2002.735.9345 1.202 1.7356 1.202zm84.1107 17.761c-14.8862-8.547-31.7751-13.087-48.9978-13.087-12.0826 0-24.4989 2.337-35.8472 6.81-1.0013.401-1.4686 1.536-1.0681 2.538.4005 1.001 1.5354 1.469 2.5367 1.068 10.881-4.273 22.7633-6.543 34.4454-6.543 16.4884 0 32.7765 4.34 47.062 12.552.334.201.668.267.935.267.667 0 1.335-.334 1.668-1.001.468-.868.201-2.07-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M113.416 135.542c-14.8862-8.547-31.7751-13.087-48.9978-13.087-12.0826 0-24.4989 2.337-35.8472 6.81-1.0013.401-1.4686 1.536-1.0681 2.537.4005 1.002 1.5354 1.469 2.5367 1.069 10.881-4.273 22.7633-6.544 34.4454-6.544 16.4884 0 32.7765 4.34 47.062 12.553.334.2.668.267.935.267.667 0 1.335-.334 1.668-1.001.468-.868.201-2.07-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M113.416 145.156c-14.8862-8.546-31.7751-13.086-48.9978-13.086-12.0826 0-24.4989 2.337-35.8472 6.81-1.0013.401-1.4686 1.536-1.0681 2.537.4005 1.002 1.5354 1.469 2.5367 1.069 10.881-4.274 22.7633-6.544 34.4454-6.544 16.4884 0 32.7765 4.34 47.062 12.553.334.2.668.267.935.267.667 0 1.335-.334 1.668-1.002.468-.868.201-2.07-.734-2.604z'
        fill='#45404A'
      />
      <path
        d='M64.4182 141.684c-12.0826 0-24.4989 2.337-35.8472 6.811-1.0013.4-1.4686 1.535-1.0681 2.537.267.734 1.0013 1.202 1.8024 1.202.267 0 .4673-.067.7343-.134 10.881-4.273 22.7633-6.543 34.4454-6.543 1.068 0 1.9359-.868 1.9359-1.936-.0668-1.069-.9346-1.937-2.0027-1.937zM224.229 31.4483c-11.349-4.4068-23.698-6.8105-35.847-6.8105-17.156 0-34.112 4.5403-48.998 13.0868-.935.5341-1.269 1.736-.735 2.6708.334.6009 1.002 1.0015 1.669 1.0015.334 0 .668-.0668 1.002-.2671 14.285-8.2126 30.573-12.5526 47.062-12.5526 11.615 0 23.497 2.2702 34.445 6.5434 1.001.4006 2.136-.1336 2.537-1.0683.333-1.0683-.134-2.2034-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M224.229 41.0631c-11.349-4.4068-23.698-6.8105-35.847-6.8105-17.156 0-34.112 4.5403-48.998 13.0868-.935.5342-1.269 1.736-.735 2.6708.334.6009 1.002 1.0015 1.669 1.0015.334 0 .668-.0668 1.002-.2671 14.285-8.2126 30.573-12.5526 47.062-12.5526 11.615 0 23.497 2.2702 34.445 6.5434 1.001.4006 2.136-.1335 2.537-1.0683.333-1.0683-.134-2.2034-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M224.229 50.6778c-11.349-4.4067-23.698-6.8104-35.847-6.8104-17.156 0-34.112 4.5403-48.998 13.0867-.935.5342-1.269 1.736-.735 2.6708.334.6009 1.002 1.0016 1.669 1.0016.334 0 .668-.0668 1.002-.2671 14.285-8.2126 30.573-12.5526 47.062-12.5526 11.615 0 23.497 2.2701 34.445 6.5433 1.001.4007 2.136-.1335 2.537-1.0683.333-1.0683-.134-2.2033-1.135-2.604zm0 24.905c-11.349-4.4068-23.698-6.8105-35.847-6.8105-17.156 0-34.112 4.5403-48.998 13.0868-.935.5341-1.269 1.736-.735 2.6707.334.601 1.002 1.0016 1.669 1.0016.334 0 .668-.0668 1.002-.2671 14.285-8.2126 30.573-12.5526 47.062-12.5526 11.615 0 23.497 2.2701 34.445 6.5434 1.001.4006 2.136-.1336 2.537-1.0683.333-1.0683-.134-2.2034-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M224.229 85.1975c-11.349-4.4067-23.698-6.8104-35.847-6.8104-17.156 0-34.112 4.5403-48.998 13.0868-.935.5341-1.269 1.736-.735 2.6707.334.6009 1.002 1.0016 1.669 1.0016.334 0 .668-.0668 1.002-.2671 14.285-8.2126 30.573-12.5526 47.062-12.5526 11.615 0 23.497 2.2701 34.445 6.5434 1.001.4006 2.136-.1336 2.537-1.0684.333-1.0683-.134-2.2033-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M224.229 94.8123c-11.349-4.4068-23.698-6.8105-35.847-6.8105-17.156 0-34.112 4.5403-48.998 13.0872-.935.534-1.269 1.736-.735 2.67.334.601 1.002 1.002 1.669 1.002.334 0 .668-.067 1.002-.267 14.285-8.2128 30.573-12.5528 47.062-12.5528 11.615 0 23.497 2.2702 34.445 6.5434 1.001.4006 2.136-.1335 2.537-1.0683.333-1.0683-.134-2.2034-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M140.385 114.376c.334 0 .668-.067 1.001-.267 5.207-3.005 10.748-5.542 16.489-7.479 1.001-.333 1.535-1.468 1.201-2.47-.334-1.002-1.468-1.536-2.47-1.202-5.941 2.003-11.682 4.674-17.156 7.812-.934.534-1.268 1.736-.734 2.671.334.534 1.001.935 1.669.935zm83.844 5.208c-11.349-4.407-23.698-6.811-35.847-6.811-17.156 0-34.112 4.541-48.998 13.087-.935.534-1.269 1.736-.735 2.671.334.601 1.002 1.001 1.669 1.001.334 0 .668-.066 1.002-.267 14.285-8.212 30.573-12.552 47.062-12.552 11.615 0 23.497 2.27 34.445 6.543 1.001.401 2.136-.134 2.537-1.068.333-1.069-.134-2.204-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M224.229 129.198c-11.349-4.406-23.698-6.81-35.847-6.81-17.156 0-34.112 4.54-48.998 13.087-.935.534-1.269 1.736-.735 2.671.334.6 1.002 1.001 1.669 1.001.334 0 .668-.067 1.002-.267 14.285-8.213 30.573-12.553 47.062-12.553 11.615 0 23.497 2.271 34.445 6.544 1.001.4 2.136-.134 2.537-1.069.333-1.068-.134-2.203-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M224.229 138.813c-11.349-4.407-23.698-6.81-35.847-6.81-17.156 0-34.112 4.54-48.998 13.087-.935.534-1.269 1.736-.735 2.67.334.601 1.002 1.002 1.669 1.002.334 0 .668-.067 1.002-.267 14.285-8.213 30.573-12.553 47.062-12.553 11.615 0 23.497 2.27 34.445 6.544 1.001.4 2.136-.134 2.537-1.069.333-1.068-.134-2.203-1.135-2.604z'
        fill='#45404A'
      />
      <path
        d='M188.382 141.885c-17.156 0-34.112 4.54-48.998 13.086-.935.535-1.269 1.736-.735 2.671.334.601 1.002 1.002 1.669 1.002.334 0 .668-.067 1.002-.267 14.285-8.213 30.573-12.553 47.062-12.553 1.068 0 1.935-.868 1.935-1.936 0-1.135-.867-2.003-1.935-2.003zM28.571 60.2926c11.3483-4.4067 23.6979-6.8104 35.8472-6.8104 7.4765 0 14.953.868 22.2293 2.5372 1.0681.2671 1.6689 1.2686 1.4686 2.3369-.267 1.0683-1.2683 1.6693-2.3364 1.469-6.9425-1.6025-14.152-2.4705-21.2947-2.4705-11.6153 0-23.4977 2.2701-34.4454 6.5434-.2003.0667-.4673.1335-.7343.1335-.8011 0-1.5354-.4674-1.8024-1.2018-.4005-1.0016.0668-2.1366 1.0681-2.5373zm0 44.1344c11.3483-4.407 23.6979-6.8104 35.8472-6.8104 1.0681 0 1.9359.868 1.9359 1.9364 0 1.068-.8678 1.936-1.9359 1.936-11.6153 0-23.4976 2.27-34.4454 6.544-.2002.066-.4673.133-.7343.133-.801 0-1.5353-.467-1.8023-1.202-.3338-1.001.1335-2.136 1.1348-2.537zm35.8472 41.13c-11.6153 0-23.4976 2.27-34.4454 6.543-.2002.067-.4673.134-.7343.134-.801 0-1.5353-.468-1.8023-1.202-.4006-1.002.1335-2.137 1.068-2.537 11.3483-4.407 23.6979-6.811 35.8473-6.811 1.068 0 1.9358.868 1.9358 1.937.0668 1.068-.801 1.936-1.8691 1.936z'
        fill='#45404A'
      />
      <path
        d='M185.111 181.679c-19.159 0-37.917 5.408-54.072 15.691l-2.937 1.869s-.067 0-.067.067l-.066.067c-.067 0-.067.067-.134.067s-.133.066-.133.066c-.067 0-.134.067-.267.067-.067 0-.134.067-.134.067-.067 0-.2.067-.267.067h-1.068c-.067 0-.2-.067-.267-.067s-.134 0-.134-.067c-.066 0-.133-.067-.267-.067-.066 0-.133-.066-.133-.066-.067 0-.067-.067-.134-.067l-.066-.067s-.067 0-.067-.067l-2.937-1.869c-16.222-10.283-34.913-15.691-54.0715-15.691-15.5539 0-31.1745 3.672-45.1262 10.616-.9345.468-2.1361.401-3.0039-.133-.9346-.534-1.4686-1.536-1.4686-2.671v-5.809c-.4673.2-.9346.468-1.4019.668-.9345.467-2.1361.4-3.0039-.134-.9346-.534-1.4686-1.535-1.4686-2.67V26.1735c-1.3351.5342-4.40584 1.0683-5.67418 1.6693V202.244c15.82088-7.078 34.97938-11.685 52.26888-11.685 23.0971 0 43.7239 6.544 63.2829 18.763l7.477.4c19.559-12.152 41.521-19.096 64.618-19.096 10.614 0 21.629 2.27 31.909 4.941l-.467-5.542c-13.485-5.074-26.902-8.346-40.72-8.346z'
        fill='#6A57DC'
      />
      <path
        d='M244.522 27.9763c-1.268-.6009-4.005-2.2034-5.273-2.7375l.4 155.0382c0 1.068.467 3.472-.467 4.073-.935.534-2.07.601-3.004.133-.467-.2-.935-.467-1.402-.667v5.809c0 1.068-.534 2.069-1.469 2.67-.934.535-2.069.601-3.004.134-1.535-.801-3.137-1.536-4.739-2.203l-1.202 5.007c6.542 1.736 14.085 3.606 20.227 6.343V27.9763h-.067z'
        fill='#6A57DC'
      />
    </SVGFloatWrapper>
  );
}