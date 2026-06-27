import {
  Box,
  Button,
  Center,
  colors,
  radius,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function CenterDemo() {
  return (
    <DemoCard
      title="Center"
      description="Center content horizontally and vertically."
    >
      <Box
        style={{
          border: `1px solid ${colors.gray[200]}`,
          borderRadius: radius.lg,
          background: colors.gray[50],
        }}
      >
        <Center height={220}>
          <Button>Centered Button</Button>
        </Center>
      </Box>
    </DemoCard>
  );
}