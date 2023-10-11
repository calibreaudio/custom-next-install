// src/components/shared/buttons/std-button.tsx

import React from 'react';
import clsx from '@/lib/utils/clsx';

type Props = Omit<React.ComponentProps<"button">, "className"> & {};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={clsx(
        "inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        "bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-900",
        "hover:bg-slate-50",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
        // Register all radix states
        "group",
        "radix-state-open:bg-slate-50 dark:radix-state-open:bg-slate-900",
        "radix-state-on:bg-slate-50 dark:radix-state-on:bg-slate-900",
        "radix-state-instant-open:bg-slate-50 radix-state-delayed-open:bg-slate-50"
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;