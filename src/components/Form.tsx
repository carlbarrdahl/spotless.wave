import { ComponentPropsWithRef, forwardRef } from "react";

const inputStyles =
  "rounded-lg w-full bg-cyan-50 p-4 m-0 block text-cyan-800 placeholder:text-cyan-900 placeholder:opacity-50 focus:outline-none";

export const Input = forwardRef(
  (
    props: ComponentPropsWithRef<"input">,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => <input className={inputStyles} ref={ref} {...props} />
);
Input.displayName = "Input";

export const Textarea = forwardRef(
  (
    props: ComponentPropsWithRef<"textarea">,
    ref: ComponentPropsWithRef<"textarea">["ref"]
  ) => <textarea className={inputStyles} ref={ref} {...props} />
);
Textarea.displayName = "Textarea";

export const FileInput = forwardRef(
  (
    props: ComponentPropsWithRef<"input">,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => (
    <input
      className="hidden"
      ref={ref}
      type="file"
      accept="image/*"
      {...props}
    />
  )
);

FileInput.displayName = "FileInput";
