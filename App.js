import React, { useState, useMemo } from 'react';
import { StatusBar, YellowBox } from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';

YellowBox.ignoreWarnings(['Calling `getNode()`']);

export default function App() {
  const [theme, setTheme] = useState('dark');

  DefaultThemePaper.colors.primary = '#1ae166';
  DarkThemePaper.colors.primary = '#1ae166';
  DarkThemePaper.colors.accent = '#1ae166';
  DefaultThemePaper.colors.background = '#fff'
  DefaultThemeNavigation.colors.background = '#fff'

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = '#15212b';

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider
        theme={theme === 'dark' ? DarkThemePaper : DefaultThemePaper}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer
          theme={
            theme === 'dark' ? DarkThemeNavigation : DefaultThemeNavigation
          }>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
