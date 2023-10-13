// src/components/shared/theme-switcher.tsx

'use client';

import { useState, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import clsx from '@/lib/utils/clsx';
import Icon from '@/lib/utils/icon';

interface ThemeSwitcherProps {}

export default function ThemeSwitcher(props: ThemeSwitcherProps) {

  const themes = [
    {
      key: 'light',
      icon: 'sun-bright',
      label: 'Light'
    },
    {
      key: 'dark',
      icon: 'moon',
      label: 'Dark'
    },
    {
      key: 'system',
      icon: 'robot',
      label: 'System'
    }
  ];

  const [preferredTheme, setPreferredTheme] = useState<null | string>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      let found = localStorage.getItem("theme");
      setPreferredTheme(found);
    } catch (error) {}
  }, []);

  useEffect(() => {
    const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (_e: MediaQueryListEvent) => {
      setPreferredTheme("system");
    };
    prefersDarkQuery.addEventListener("change", updateTheme);

    return () => {
      prefersDarkQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  if (!mounted) return null;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="inline-flex items-center rounded-full p-3 text-sm font-medium shadow-sm bg-yellow-100 hover:bg-yellow-200 text-slate-900 transition-colors duration-150 ease-in-out">
          <span className="sr-only">Toggle theme</span>
          <Icon icon='sun-bright' size={20} weight='regular' />
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          align="center"
          sideOffset={4}
          className={clsx(
            "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
            "z-50 w-48 rounded-lg p-4 shadow-md md:w-56",
            "bg-white dark:bg-slate-700"
          )}
        >
          <Popover.Arrow className="fill-current text-white dark:text-slate-700" />
          <div className="mt-2 grid grid-cols-3 gap-3">
            {themes.map(({ key, label, icon }) => (
              <button
                key={key}
                className={clsx(
                  "flex flex-col items-center justify-center",
                  "rounded-lg p-3 text-xs",
                  "transition-colors duration-150 ease-in-out",
                  key === preferredTheme && preferredTheme === "light"
                    ? "bg-yellow-100 dark:bg-yellow-900"
                  : key === preferredTheme && preferredTheme === "dark"
                    ? "bg-purple-100 dark:bg-purple-800"
                  : key === preferredTheme && preferredTheme === "system"
                    ? "bg-blue-100 dark:bg-blue-800"
                  : "bg-transparent"
                )}
                onClick={() => {
                  (window as any).__setPreferredTheme(key);
                  setPreferredTheme(key);
                }}
              >
                <Icon icon={icon} size={20} weight='regular' />
                <span className="mt-2">{label}</span>
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}