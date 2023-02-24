import { useEffect, useState } from 'react';

import { Themes } from '@/components/ThemeSwitcher/ThemeSwitcher';

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

const useThemeDetector = (): Themes => {
  const getCurrentTheme = () => (darkThemeMq.matches ? Themes.dark : Themes.light);
  const [browserTheme, setBrowserTheme] = useState<Themes>(getCurrentTheme());

  useEffect(() => {
    darkThemeMq.addEventListener('change', (event) => {
      const colorScheme = event.matches ? Themes.dark : Themes.light;
      console.log(colorScheme); // "dark" or "light"
      setBrowserTheme(colorScheme);
    });

    return () => darkThemeMq.removeListener('change');
  }, []);
  return browserTheme;
};
export default useThemeDetector;
