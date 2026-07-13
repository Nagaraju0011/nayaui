import { Box } from "../Box";
import type { FlexProps } from "./Flex.types";

export const Flex = ({ style, ...props }: FlexProps) => (
  <Box
    style={{
      display: "flex",
      ...style,
    }}
    {...props}
  />
);

Flex.displayName = "Flex";
