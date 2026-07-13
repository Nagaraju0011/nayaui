import { Flex } from "../Flex";
import type { StackProps } from "./Stack.types";

export const Stack = ({ gap, style, ...props }: StackProps) => (
  <Flex
    style={{
      flexDirection: "column",
      gap,
      ...style,
    }}
    {...props}
  />
);

Stack.displayName = "Stack";
