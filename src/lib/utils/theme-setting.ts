// src/lib/utils/theme.ts
'use client';

import useSWR from 'swr';

const fetcher = (theme: string) => {
  var data = theme;
  const storageTheme = localStorage.getItem('theme');
  if (storageTheme) {
    theme = storageTheme;
  } else {
    theme = 'system';
  }
  return data;
}

const useSetting = () => {
  const { data, error, mutate } = useSWR('theme', fetcher);
  return {
    setting: data,
    settingLoading: !error && !data,
    settingError: error,
    setSetting: mutate
  }
}

export default useSetting;