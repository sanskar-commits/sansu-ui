import {
  Box,
  Button,
  Container,
  colors,
  radius,
  spacing,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function ContainerDemo() {
  return (
    <DemoCard
      title="Container"
      description="Center content and control the maximum layout width."
    >
      <Box
        style={{
          background: colors.gray[100],
          padding: spacing[6],
          borderRadius: radius.lg,
        }}
      >
        <Container maxWidth={700}>
          <Box
            style={{
              background: colors.primary[600],
              color: colors.white,
              padding: spacing[6],
              borderRadius: radius.md,
              textAlign: "center",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              Container Example
            </h3>

            <p>
              This content is centered and constrained by the
              Container component.
            </p>

            <Button>Learn More</Button>
          </Box>
        </Container>
      </Box>
    </DemoCard>
  );
}