import type { SVGProps } from "react";

type ArrowUpRightIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ArrowUpRightIcon({ size = 24, ...props }: ArrowUpRightIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
