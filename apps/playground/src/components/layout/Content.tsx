import { ButtonDemo } from "../demos/forms/ButtonDemo";

import { BoxDemo } from "../demos/layout/BoxDemo";
import { ContainerDemo } from "../demos/layout/ContainerDemo";
import { DividerDemo } from "../demos/layout/DividerDemo";
import { FlexDemo } from "../demos/layout/FlexDemo";
import { SpacerDemo } from "../demos/layout/SpacerDemo";
import { StackDemo } from "../demos/layout/StackDemo";

import { TokensDemo } from "../demos/tokens/TokensDemo";

export function Content() {
  return (
    <>
      <ButtonDemo />
      <BoxDemo />
      <FlexDemo />
      <StackDemo />
      <SpacerDemo />
      <DividerDemo />
      <ContainerDemo />
      <TokensDemo />
    </>
  );
}