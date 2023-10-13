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
        "inline-flex items-center rounded-md px-4 py-3 text-sm font-medium shadow-sm transition-colors duration-150 ease-in-out",
        "bg-pink-700 hover:bg-pink-600 text-white dark:bg-pink-200 dark:hover:bg-pink-300 dark:text-pink-950",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'",
        // Register all radix states
        "group",
        "radix-state-open:bg-pink-700 dark:radix-state-open:bg-pink-200",
        "radix-state-on:bg-pink-700 dark:radix-state-on:bg-pink-200",
        "radix-state-instant-open:bg-pink-700 radix-state-delayed-open:bg-pink-700"
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;