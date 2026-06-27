import {
  Box,
  colors,
  radius,
  spacing,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function BoxDemo() {
  return (
    <DemoCard
      title="Box"
      description="The foundational layout component of Sansu UI."
    >
      <Box
        style={{
          background: colors.primary[600],
          color: colors.white,
          padding: spacing[5],
          borderRadius: radius.md,
        }}
      >
        Hello from Box
      </Box>
    </DemoCard>
  );
}