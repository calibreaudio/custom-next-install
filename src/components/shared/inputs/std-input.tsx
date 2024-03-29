// src/components/shared/inputs/std-input.tsx

import React from 'react';
import Icon from '@/lib/utils/icon';
import clsx from '@/lib/utils/clsx';

type Props = Omit<React.ComponentProps<'input'>, 'className'> & {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
  description?: string;
  required?: boolean;
  validate?: any;
  errors?: string;
  register?: any;
  onChange?: any;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({
    label,
    name,
    type,
    placeholder,
    defaultValue,
    autoComplete,
    description,
    required,
    validate,
    errors,
    register,
    onChange,
  },
  ref) => (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold"
        >
          {label}
          {required && <span className="ml-1 text-red-500 dark:text-red-400">*</span>}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          ref={ref}
          type={type}
          name={name}
          id={name}
          {...(register && register(name, { required, validate }))}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete={autoComplete ? autoComplete : 'off'}
          aria-describedby={
            description
            ? `${name}-description`
            : errors ? `${name}-error`
            : undefined
          }
          aria-invalid={errors ? 'true' : 'false'}
          onChange={onChange}
          className={clsx(
            'block bg-slate-50 dark:bg-slate-950 w-full rounded-md border-0 py-1.5 text-slate-900 dark:text-white ring-inset placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
            errors ? 'ring-1 ring-red-300 text-red-800 dark:text-red-200 focus:ring-red-600' : 'ring-1 ring-slate-300 focus:ring-indigo-600',
          )}
        />
        {errors && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-red-500 dark:text-red-400">
            <Icon icon='triangle-exclamation' size={16} weight='regular' />
          </div>
        )}
      </div>
      {description && !errors && (
        <p
          className="mt-2 text-sm font-light text-slate-500 dark:text-slate-300"
          id={`${name}-description`}
        >
          {description}
        </p>
      )}
      {errors && (
        <p
          className="mt-2 text-sm text-red-600 dark:text-red-300"
          id={`${name}-error`}
          role="alert"
        >
          {errors}
        </p>
      )}
    </div>
  )
);

Input.displayName = 'Input';
export default Input;