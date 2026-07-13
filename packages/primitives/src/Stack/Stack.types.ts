import type { HTMLAttributes, CSSProperties } from "react";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: CSSProperties["gap"];
}
