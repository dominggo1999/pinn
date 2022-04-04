import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import useThemeStore from './store/useThemeStore';
import { AppWrapper } from './AppWrapper';

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <AppWrapper className={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/auth/*"
          element={
            <Auth />
          }
        />

      </Routes>
    </AppWrapper>
  );
};

export default App;
