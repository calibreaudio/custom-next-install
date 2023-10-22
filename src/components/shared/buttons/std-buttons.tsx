// src/components/shared/buttons/std-buttons.tsx

import React from 'react';
import clsx from '@/lib/utils/clsx';

type Props = Omit<React.ComponentProps<"button">, "className"> & {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  value?: string | string[] | number;
  name?: string;
  disabled?: boolean;
  onClick?: any;
  autoFocus?: boolean;
};

const sharedClasses = ' font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition ease-in-out duration-150'
const ableClasses = 'bg-pink-600 hover:bg-pink-700'
const disabledClasses = 'bg-slate-300 text-slate-500 shadow-none cursor-not-allowed'

const xSmallButton = React.forwardRef<HTMLButtonElement, Props>(
  ({
    type,
    label,
    value,
    name,
    disabled,
    onClick,
    autoFocus,
  }, ref) => (
    <button
      ref={ref}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onClick={onClick}
      autoFocus={autoFocus}
      className={clsx(
        sharedClasses,
        disabled ? disabledClasses : ableClasses,
        "rounded px-2 py-1 text-xs"
      )}
    >
      {label}
    </button>
  )
);

xSmallButton.displayName = 'xSmallButton';

const smallButton = React.forwardRef<HTMLButtonElement, Props>(
  ({
    type,
    label,
    value,
    name,
    disabled,
    onClick,
    autoFocus,
  }, ref) => (
    <button
      ref={ref}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onClick={onClick}
      autoFocus={autoFocus}
      className={clsx(
        sharedClasses,
        disabled ? disabledClasses : ableClasses,
        "rounded px-2 py-1 text-sm"
      )}
    >
      {label}
    </button>
  )
);

smallButton.displayName = 'smallButton';

const mediumButton = React.forwardRef<HTMLButtonElement, Props>(
  ({
    type,
    label,
    value,
    name,
    disabled,
    onClick,
    autoFocus,
  }, ref) => (
    <button
      ref={ref}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onClick={onClick}
      autoFocus={autoFocus}
      className={clsx(
        sharedClasses,
        disabled ? disabledClasses : ableClasses,
        "rounded-md px-2.5 py-1.5 text-sm"
      )}
    >
      {label}
    </button>
  )
);

mediumButton.displayName = 'mediumButton';

const largeButton = React.forwardRef<HTMLButtonElement, Props>(
  ({
    type,
    label,
    value,
    name,
    disabled,
    onClick,
    autoFocus,
  }, ref) => (
    <button
      ref={ref}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onClick={onClick}
      autoFocus={autoFocus}
      className={clsx(
        sharedClasses,
        disabled ? disabledClasses : ableClasses,
        "rounded-md px-3 py-2 text-sm"
      )}
    >
      {label}
    </button>
  )
);

largeButton.displayName = 'largeButton';

const xLargeButton = React.forwardRef<HTMLButtonElement, Props>(
  ({
    type,
    label,
    value,
    name,
    disabled,
    onClick,
    autoFocus,
  }, ref) => (
    <button
      ref={ref}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onClick={onClick}
      autoFocus={autoFocus}
      className={clsx(
        sharedClasses,
        disabled ? disabledClasses : ableClasses,
        "rounded-md px-3.5 py-2.5 text-sm"
      )}
    >
      {label}
    </button>
  )
);

xLargeButton.displayName = 'xLargeButton';

const xxLargeButton = React.forwardRef<HTMLButtonElement, Props>(
  ({
    type,
    label,
    value,
    name,
    disabled,
    onClick,
    autoFocus,
  }, ref) => (
    <button
      ref={ref}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onClick={onClick}
      autoFocus={autoFocus}
      className={clsx(
        sharedClasses,
        disabled ? disabledClasses : ableClasses,
        "rounded-lg px-4 py-3 text-base"
      )}
    >
      {label}
    </button>
  )
);

xxLargeButton.displayName = 'xxLargeButton';

export {
  xSmallButton,
  smallButton,
  mediumButton,
  largeButton,
  xLargeButton,
  xxLargeButton,
};