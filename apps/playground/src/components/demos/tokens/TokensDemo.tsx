import {
  Box,
  colors,
  radius,
  shadows,
  spacing,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function TokensDemo() {
  return (
    <DemoCard
      title="Design Tokens"
      description="Reusable design values shared across Sansu UI."
    >
      <Box
        style={{
          background: colors.primary[600],
          color: colors.white,
          padding: spacing[6],
          borderRadius: radius.lg,
          boxShadow: shadows.lg,
          maxWidth: "320px",
        }}
      >
        Primary Card using Sansu UI Tokens
      </Box>
    </DemoCard>
  );
}