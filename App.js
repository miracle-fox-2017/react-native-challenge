import React,{Component} from 'react';
import {
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Home from './components/Home';
import List from './components/List';

const Navigator = StackNavigator({
  Home : {
    screen : Home
  },
  List : {
    screen : List
  },
});

export default Navigator
