import {
  Button,
  Stack,
} from "@sansu-ui/react";

import { DemoCard } from "../../ui/DemoCard";

export function StackDemo() {
  return (
    <DemoCard
      title="Stack"
      description="Arrange items vertically with consistent spacing."
    >
      <Stack spacing={16}>
        <Button>Save</Button>

        <Button variant="outline">
          Cancel
        </Button>

        <Button variant="ghost">
          Reset
        </Button>
      </Stack>
    </DemoCard>
  );
}