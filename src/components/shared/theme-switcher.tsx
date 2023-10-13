// src/components/shared/theme-switcher.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/lib/hooks/useIsomorphicLayoutEffect';
import useSetting from '@/lib/utils/theme-setting';
import * as Popover from '@radix-ui/react-popover';
import clsx from '@/lib/utils/clsx';
import Icon from '@/lib/utils/icon';

interface ThemeSwitcherProps {}

function update() {
  document.documentElement.classList.add('changing-theme');
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', '#0f172a');
    }
  } else {
    document.documentElement.classList.remove('dark');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', '#f1f5f9');
    }
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme');
  });
}

const themes = [
  {
    value: 'light',
    icon: 'sun-bright',
    label: 'Light'
  },
  {
    value: 'dark',
    icon: 'moon',
    label: 'Dark'
  },
  {
    value: 'system',
    icon: 'robot',
    label: 'System'
  }
];

function useTheme() {
  let { setting, setSetting } = useSetting()
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme
    if (theme === 'light' || theme === 'dark') {
      setSetting(theme)
    } else {
      setSetting('system')
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme')
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting
    }
    if (initial.current) {
      initial.current = false
    } else {
      update()
    }
  }, [setting])

  useEffect(() => {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    function onStorage() {
      update()
      let theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setSetting(theme)
      } else {
        setSetting('system')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }

      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return [setting, setSetting]
}

export default function ThemeSwitcher(props: ThemeSwitcherProps) {

  let [setting, setSetting] = useTheme()
  const [preferredTheme, setPreferredTheme] = useState<string | null>(null);
  const [currentIcon, setCurrentIcon] = useState('sun-bright');

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="inline-flex items-center rounded-full p-3 text-sm font-medium shadow-sm bg-yellow-100 hover:bg-yellow-200 text-slate-900 transition-colors duration-150 ease-in-out">
          <span className="sr-only">Toggle theme</span>
          <Icon icon={currentIcon!} size={20} weight='regular' />
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
            {themes.map(({ value, label, icon }) => (
              <button
                key={value}
                className={clsx(
                  "flex flex-col items-center justify-center",
                  "rounded-lg p-3 text-xs",
                  "transition-colors duration-150 ease-in-out",
                  value === preferredTheme && preferredTheme === "light"
                    ? "bg-yellow-100 dark:bg-yellow-900"
                  : value === preferredTheme && preferredTheme === "dark"
                    ? "bg-purple-100 dark:bg-purple-800"
                  : value === preferredTheme && preferredTheme === "system"
                    ? "bg-blue-100 dark:bg-blue-800"
                  : "bg-transparent"
                )}
                onClick={() => {
                  setPreferredTheme(value);
                  setCurrentIcon(icon);
                  if (typeof setSetting === 'function') {
                    setSetting(value);
                  }
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