import {
  Box,
  Button,
  Flex,
  Spacer,
  colors,
  radius,
  shadows,
  spacing,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function SpacerDemo() {
  return (
    <DemoCard
      title="Spacer"
      description="Fill the remaining available space inside a Flex container."
    >
      <Box
        style={{
          border: `1px solid ${colors.gray[200]}`,
          borderRadius: radius.lg,
          boxShadow: shadows.sm,
          padding: spacing[5],
        }}
      >
        <Flex align="center">
          <Button>Back</Button>

          <Spacer />

          <Button variant="outline">
            Next
          </Button>
        </Flex>
      </Box>
    </DemoCard>
  );
}