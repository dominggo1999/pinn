import React, { useState } from 'react';
import Switch from 'react-switch';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { SwitchWrapper, HandleIcon } from './ThemeSwitch.style';
import useThemeStore from '../../store/useThemeStore';

const changeTheme = useThemeStore.getState().changeTheme;

const ThemeSwitch = () => {
  const [test, setTest] = useState(false);
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
