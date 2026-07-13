import { Box } from "../Box";
import type { GridProps } from "./Grid.types";

export const Grid = ({
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  style,
  ...props
}: GridProps) => {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gap,
        columnGap,
        rowGap,
        ...style,
      }}
      {...props}
    />
  );
};

Grid.displayName = "Grid";
