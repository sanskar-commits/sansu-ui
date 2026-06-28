import {
  Button,
  Center,
  Stack,
} from "@sansu-ui/react";

import DemoCard from "../layout/DemoCard";

export default function CenterDemo() {
  return (
    <DemoCard
      title="Center"
      description="Centers content horizontally and vertically."
    >
      <Stack gap={32}>
        <Center
          style={{
            height: 140,
            border: "1px dashed #CBD5E1",
          }}
        >
          <Button>Centered Button</Button>
        </Center>

        <Center
          inline
          style={{
            width: 220,
            height: 80,
            border: "1px dashed #CBD5E1",
          }}
        >
          Inline Center
        </Center>

        <Center
          as="section"
          style={{
            height: 120,
            background: "#F8FAFC",
            borderRadius: 8,
          }}
        >
          Custom HTML Element
        </Center>
      </Stack>
    </DemoCard>
  );
}