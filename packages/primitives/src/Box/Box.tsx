import type { BoxProps } from "./Box.types";

export const Box = ({ children, ...props }: BoxProps) => {
  return <div {...props}>{children}</div>;
};

Box.displayName = "Box";
