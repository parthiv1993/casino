import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import light from './contexts/theme/light';

export const renderComponentWithLightTheme = (children) => {
  return render(<ThemeProvider theme={light}>{children}</ThemeProvider>);
};

export const lowerCaseAllKeys = (props = {}) => {
  const lowercaseObject = {};
  Object.keys(props).map((key) => (lowercaseObject[key.toLowerCase()] = props[key]));

  return lowercaseObject;
};

export const MockIcon = (props) => <div component="Icon" {...lowerCaseAllKeys(props)} />;
