import { useEffect } from 'react';

import Moon from '@/components/icons/Moon';
import Sun from '@/components/icons/Sun';
import useLocalStorage from '@/hooks/useLocalStorage';
import useThemeDetector from '@/hooks/useThemeDetector';

export enum Themes {
  dark = 'coffee',
  light = 'garden',
}

const ThemeSwitcher = () => {
  const browserTheme = useThemeDetector();
  const [localTheme, setLocalTheme] = useLocalStorage('theme', browserTheme);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', localTheme);
    }
  }, [localTheme]);

  const changeTheme = () => {
    const newTheme = localTheme === Themes.dark ? Themes.light : Themes.dark;
    setLocalTheme(newTheme);
  };

  return (
    <div>
      <button onClick={changeTheme}>{localTheme === Themes.dark ? <Moon /> : <Sun />}</button>
    </div>
  );
};

export default ThemeSwitcher;
