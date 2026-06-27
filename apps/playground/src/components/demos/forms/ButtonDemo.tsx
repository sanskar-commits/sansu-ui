import { Button, Flex } from "@sansu-ui/react";
import { DemoCard } from "../../ui/DemoCard";

export function ButtonDemo() {
  return (
    <DemoCard
      title="Button"
      description="Buttons allow users to trigger actions."
    >
      <Flex gap={16}>
        <Button>Solid</Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>
      </Flex>
    </DemoCard>
  );
}