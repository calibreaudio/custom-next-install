// src/components/shared/checkboxes/std-checkbox.tsx

import React from 'react';

type Props = Omit<React.ComponentProps<'input'>, 'className'> & {
  label?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  description?: string;
  required?: boolean;
  validate?: any;
  errors?: string;
  register?: any;
  onChange?: any;
};

const InlineCheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({
    label,
    name,
    checked,
    disabled,
    defaultChecked,
    description,
    required,
    validate,
    errors,
    register,
    onChange,
  },
  ref) => (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          ref={ref}
          id={name}
          aria-describedby={description ? `${name}-description` : undefined}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={onChange}
          {...(register && register(name, { required, validate }))}
          className="h-4 w-4 rounded border-slate-500 text-pink-600 dark:text-pink-500 focus:ring-pink-600 focus:ring-2"
        />
      </div>
      <div className="ml-2">
        <label
          htmlFor={name}
          className="text-sm lg:text-md font-medium leading-4"
        >
          {label}
          {required && <span className="ml-1 text-red-700 dark:text-red-400">*</span>}
        </label>
        {description && (
          <span
            id={`${name}-description`}
            className="mt-1 text-sm font-light text-slate-600 dark:text-slate-300"
          >
            <span className="sr-only">{label} </span>{' '}{description}
          </span>
        )}
        {errors && (
          <p
            className="mt-2 text-sm text-red-700"
            id={`${name}-description`}
            role="alert"
          >
            {errors}
          </p>
        )}
      </div>
    </div>
  )
);

InlineCheckbox.displayName = 'InlineCheckbox';
export default InlineCheckbox;