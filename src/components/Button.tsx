import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";

const btnStyles = cva(
  ["flex items-center justify-center rounded-full gap-2 transition-colors"],
  {
    variants: {
      intent: {
        solid: ["bg-cyan-200 hover:bg-cyan-300"],
        outline: ["border-cyan-900 border-2 hover:bg-cyan-50"],
        ghost: ["hover:bg-cyan-50"],
      },
      size: {
        sm: ["py-1 px-2"],
        md: ["py-2 px-4"],
      },
    },
    defaultVariants: {
      intent: "solid",
      size: "md",
    },
  }
);

export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof btnStyles>;

export const Button = ({ className, size, intent, ...props }: ButtonProps) => (
  <button
    type="button"
    className={clsx(btnStyles({ size, intent: intent }), className)}
    // className="flex w-full cursor-pointer items-center justify-center"
    {...props}
  />
);
