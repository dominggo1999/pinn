import React from 'react';
import S from 'react-switch';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { SwitchWrapper, HandleIcon } from './ThemeSwitch.style';
import useThemeStore from '../../store/useThemeStore';

// https://github.com/vitejs/vite/issues/2139#issuecomment-824557740
const Switch = S.default ? S.default : S;

const changeTheme = useThemeStore.getState().changeTheme;

const ThemeSwitch = () => {
  const theme = useThemeStore((state) => state.theme);

  const isDark = theme === 'dark';

  return (
    <SwitchWrapper>
      <Switch
        onColor="#E53265"
        offColor="#222535"
        onChange={changeTheme}
        checked={isDark}
        checkedIcon={false}
        uncheckedIcon={false}
        activeBoxShadow="0px 0px 2px 3px #E53265"
        uncheckedHandleIcon={(
          <HandleIcon>
            <MdOutlineLightMode />
          </HandleIcon>
        )}
        checkedHandleIcon={(
          <HandleIcon>
            <MdDarkMode />
          </HandleIcon>
        )}
      />
    </SwitchWrapper>
  );
};

export default ThemeSwitch;
