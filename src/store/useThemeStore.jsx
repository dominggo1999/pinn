import create from 'zustand';
import produce from 'immer';

const DEFAULT_THEME = 'dark';

let savedTheme = localStorage.getItem('theme');
if(!savedTheme) {
  localStorage.setItem('theme', 'dark');
  savedTheme = DEFAULT_THEME;
}

export const initialTheme = savedTheme;

const changeTheme = (set, newTheme) => {
  return set(produce((draft) => {
    draft.theme.name = newTheme;
  }));
};

const useThemeStore = create((set, get) => {
  return {
    theme: initialTheme,
    changeTheme: (newTheme) => changeTheme(set, newTheme),
  };
});

export default useThemeStore;
