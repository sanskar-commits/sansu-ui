import {
  Box,
  Flex,
  colors,
  spacing,
  radius,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function FlexDemo() {
  return (
    <DemoCard
      title="Flex"
      description="Arrange items using CSS Flexbox."
    >
      <Flex gap={spacing[4]}>
        <Box
          style={{
            background: colors.primary[600],
            color: colors.white,
            padding: spacing[5],
            borderRadius: radius.md,
          }}
        >
          One
        </Box>

        <Box
          style={{
            background: colors.success,
            color: colors.white,
            padding: spacing[5],
            borderRadius: radius.md,
          }}
        >
          Two
        </Box>

        <Box
          style={{
            background: colors.danger,
            color: colors.white,
            padding: spacing[5],
            borderRadius: radius.md,
          }}
        >
          Three
        </Box>
      </Flex>
    </DemoCard>
  );
}