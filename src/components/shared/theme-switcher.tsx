// src/components/shared/theme-switcher.tsx

'use client';

import { useState, useEffect, useRef, Fragment } from 'react';
import { useIsomorphicLayoutEffect } from '@/lib/hooks/useIsomorphicLayoutEffect';
import useSetting from '@/lib/utils/theme-setting';
import { Popover, Transition } from '@headlessui/react';
import clsx from '@/lib/utils/clsx';
import Icon from '@/lib/utils/icon';

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

export default function ThemeSwitcher() {

  let [setting, setSetting] = useTheme()
  const [preferredTheme, setPreferredTheme] = useState<string | null>(null);
  const [currentIcon, setCurrentIcon] = useState('sun-bright');

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="inline-flex items-center rounded-full p-3 text-sm font-medium shadow-sm bg-yellow-100 hover:bg-yellow-200 text-slate-900 transition-colors duration-150 ease-in-out"
          >
            <span className="sr-only">Toggle theme</span>
            <Icon icon={currentIcon!} size={20} weight='regular' />
          </Popover.Button>
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative bg-white grid grid-cols-3 gap-3 p-3">
                    <div className="fixed left-1/2 -top-3 text-white -translate-x-1/2">
                      <Icon icon='caret-up' size={20} weight='solid' />
                    </div>
                    {themes.map(({ value, label, icon }) => (
                      <button
                        key={value}
                        className={clsx(
                          "flex flex-col items-center justify-center text-slate-900 hover:bg-slate-100",
                          "rounded-lg p-3 text-xs",
                          "transition-colors duration-150 ease-in-out",
                          value === preferredTheme && preferredTheme === "light"
                            ? "bg-yellow-100 dark:bg-yellow-90 dark:text-white0"
                          : value === preferredTheme && preferredTheme === "dark"
                            ? "bg-purple-100 dark:bg-purple-800 dark:text-white"
                          : value === preferredTheme && preferredTheme === "system"
                            ? "bg-blue-100 dark:bg-blue-800 dark:text-white"
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
                </div>
              </Popover.Panel>
            </Transition>
        </>
      )}
    </Popover>
  )
}