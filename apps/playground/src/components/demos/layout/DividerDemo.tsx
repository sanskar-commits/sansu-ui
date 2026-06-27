import {
  Box,
  Button,
  Divider,
  Flex,
  colors,
  radius,
  spacing,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function DividerDemo() {
  return (
    <DemoCard
      title="Divider"
      description="Separate content into logical sections."
    >
      <Box
        style={{
          border: `1px solid ${colors.gray[200]}`,
          borderRadius: radius.lg,
          padding: spacing[6],
        }}
      >
        <Button>Top Action</Button>

        <Divider />

        <Button variant="outline">
          Bottom Action
        </Button>

        <Divider
          color={colors.primary[500]}
        />

        <Flex align="center">
          <Button>Left</Button>

          <Divider
            orientation="vertical"
            margin={spacing[4]}
          />

          <Button variant="ghost">
            Right
          </Button>
        </Flex>
      </Box>
    </DemoCard>
  );
}