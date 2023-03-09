import { useEffect } from 'react';

import Moon from '@/components/icons/Moon';
import Sun from '@/components/icons/Sun';
import Tooltip from '@/components/ui/Tooltip';
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
      html.className = localTheme === Themes.dark ? 'dark' : '';
    }
  }, [localTheme]);

  const changeTheme = () => {
    const newTheme = localTheme === Themes.dark ? Themes.light : Themes.dark;
    setLocalTheme(newTheme);
  };

  return (
    <div>
      <Tooltip content={localTheme === Themes.dark ? 'Set light theme' : 'Set dark theme'}>
        <button onClick={changeTheme}>
          {localTheme === Themes.dark ? <Moon className="w-8 h-8" /> : <Sun className="w-8 h-8" />}
        </button>
      </Tooltip>
    </div>
  );
};

export default ThemeSwitcher;
