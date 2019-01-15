import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Movies from './Movies';
import Confirmation from './Confirmation';

const RootStack = createStackNavigator(
  {
    Movies: {
      screen: Movies
    },
    Confirmation: {
      screen: Confirmation
    }
  },
  {
    initialRouteName: "Movies"
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const App = createAppContainer(RootStack);

export default App;