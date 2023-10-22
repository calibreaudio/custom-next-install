// src/components/shared/inputs/std-input.tsx

import React from 'react';
import Icon from '@/lib/utils/icon';
import clsx from '@/lib/utils/clsx';

type Props = Omit<React.ComponentProps<'input'>, 'className'> & {
  label?: string;
  addon?: string;
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

const AddOnInput = React.forwardRef<HTMLInputElement, Props>(
  ({
    label,
    addon,
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
          className="block text-sm lg:text-md font-medium leading-4"
        >
          {label}
          {required && <span className="ml-1 text-red-700 dark:text-red-400">*</span>}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="flex">
          <span className="inline-flex items-center rounded-l-md border border-r-0 bg-slate-500 border-slate-500 px-3 text-slate-50 sm:text-sm">
            {addon}
          </span>
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
              'block dark:bg-slate-100 w-full rounded-r-md border-0 py-1.5 text-slate-900 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6',
              errors ? 'ring-2 ring-red-600' : 'ring-1 ring-slate-500',
            )}
          />
        </div>
        {errors && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-red-600">
            <Icon icon='circle-exclamation' size={16} weight='solid' />
          </div>
        )}
      </div>
      {description && !errors && (
        <p
          className="mt-2 text-sm font-light text-slate-600 dark:text-slate-300"
          id={`${name}-description`}
        >
          {description}
        </p>
      )}
      {errors && (
        <p
          className="mt-2 text-sm text-red-700 dark:text-red-300"
          id={`${name}-error`}
          role="alert"
        >
          {errors}
        </p>
      )}
    </div>
  )
);

AddOnInput.displayName = 'AddOnInput';
export default AddOnInput;