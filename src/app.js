import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Movies from './Movies';

const RootStack = createStackNavigator(
    {
        Movies: {
            screen: Movies
        }
    },
    {
        initialRouteName: "Movies"
    },
)

const App = createAppContainer(RootStack);


export default App;