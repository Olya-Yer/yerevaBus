/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import ShowOnMap from './src/components/ShowOnMap';
import ShowByNumber from './src/components/ShowByNumber';
import App1 from './src/components/App1';
import markOnMap from './src/components/markOnMap';

import {
  createStackNavigator,
} from 'react-navigation';

const Navigation = StackNavigator({
    First:{screen: App1},
    Third:{screen: ShowOnMap},
    Forth:{screen: ShowByNumber},
    Fifth:{screen: markOnMap}
});

export default Navigation;