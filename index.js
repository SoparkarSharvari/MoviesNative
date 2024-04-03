/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import ImportedApp from './App';

const App = () => {
  return (
    <>
      <ImportedApp />
    </>
  );
};

AppRegistry.registerComponent(appName, () => App);
