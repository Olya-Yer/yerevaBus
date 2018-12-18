/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,StatusBar, Dimensions,StyleSheet, Text, View, TextInput} from 'react-native';
import ToInput from './src/components/ToInput';
import FromInput from './src/components/FromInput';
import SplashScreen from 'react-native-splash-screen';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import ShowOnMap from './src/components/ShowOnMap';
import ResultPage from './src/components/ResultPage';
import ShowByNumber from './src/components/ShowByNumber';
import App1 from './src/components/App1';
import markOnMap from './src/components/markOnMap';

import {
  createStackNavigator,
} from 'react-navigation';

const Navigation = StackNavigator({
    First:{screen: App1},
    Second:{screen: ResultPage},
    Third:{screen: ShowOnMap},
    Forth:{screen: ShowByNumber},
    Fifth:{screen: markOnMap}
});






export default Navigation;