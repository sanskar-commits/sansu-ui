import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";

/**
 * The `as` prop.
 */
export type AsProp<C extends ElementType> = {
  as?: C;
};

/**
 * Props inherited from another element.
 */
export type PropsToOmit<
  C extends ElementType,
  P
> = keyof (AsProp<C> & P);

/**
 * Polymorphic component props.
 */
export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {}
> =
  Props &
  AsProp<C> &
  Omit<
    ComponentPropsWithoutRef<C>,
    PropsToOmit<C, Props>
  >;

/**
 * Polymorphic ref.
 */
export type PolymorphicRef<
  C extends ElementType
> =
  ComponentPropsWithRef<C>["ref"];