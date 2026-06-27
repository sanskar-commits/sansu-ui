import {
  ComponentPropsWithoutRef,
  ElementType,
} from "react";

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type PolymorphicProps<
  C extends ElementType,
  Props = {}
> = Props &
  AsProp<C> &
  Omit<
    ComponentPropsWithoutRef<C>,
    keyof Props | "as"
  >;