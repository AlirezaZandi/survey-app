import React from "react";

type Props = {
  color?: string;
  size?: number;
};

const CheckIcon = ({ size, color }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19.716 4.386a1 1 0 0 1 1.572 1.236L10.665 19.136a1.5 1.5 0 0 1-2.324.042l-5.104-6.032a1 1 0 1 1 1.526-1.292l4.708 5.564L19.716 4.386z'
        fill='#000000'
      />
    </svg>
  );
};

export { CheckIcon };
