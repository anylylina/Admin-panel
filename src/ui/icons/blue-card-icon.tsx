import type { SVGProps } from 'react';

export const BlueCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="44"
      height="30"
      viewBox="0 0 44 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.5" />
      <circle cx="29" cy="15" r="15" fill="white" fill-opacity="0.5" />
    </svg>
  );
};
