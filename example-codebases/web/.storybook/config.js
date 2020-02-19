import { addDecorator, configure } from '@storybook/react';

import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import ThemeProvider from './theme-provider';

import createLigthTheme from '../src/themes/light-theme';
import createDarkTheme from '../src/themes/dark-theme';

import '../src/App.css';
import { Diez, DesignLanguage } from 'diez-dashboard';

var ds = new Diez(DesignLanguage).component;
const themes = [createLigthTheme(ds), createDarkTheme(ds)];
addDecorator(withThemesProvider(themes, ThemeProvider));

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
