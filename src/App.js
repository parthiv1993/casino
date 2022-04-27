import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './contexts/theme/light';
// import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
// import Page from './components/page';

import Login from './pages/login';
import { AuthWrapper, PageTemplate } from './components';

const Home = React.lazy(() => import('./pages/home'));
const Game = React.lazy(() => import('./pages/game'));

function App() {
  console.log('loading');
  return (
    <>
      <ThemeProvider theme={light}>
        <Routes>
          <Route element={<PageTemplate />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <AuthWrapper>
                  <React.Suspense fallback={<></>}>
                    <Home />
                  </React.Suspense>
                </AuthWrapper>
              }
            />
            <Route
              path="/game/:code"
              element={
                <AuthWrapper>
                  <React.Suspense fallback={<></>}>
                    <Game />
                  </React.Suspense>
                </AuthWrapper>
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
