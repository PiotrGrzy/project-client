import { useEffect, useState } from 'react';

import { Themes } from '@/components/ThemeSwitcher/ThemeSwitcher';

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

const useThemeDetector = (): Themes => {
  const getCurrentTheme = () => (darkThemeMq.matches ? Themes.dark : Themes.light);
  const [browserTheme, setBrowserTheme] = useState<Themes>(getCurrentTheme());

  useEffect(() => {
    const listener: any = darkThemeMq.addEventListener('change', (event) => {
      const colorScheme = event.matches ? Themes.dark : Themes.light;
      setBrowserTheme(colorScheme);
    });

    return () => darkThemeMq.removeEventListener('change', listener);
  }, []);
  return browserTheme;
};
export default useThemeDetector;
