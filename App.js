import React,{Component} from 'react';
import {
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';

const Navigator = StackNavigator({
  Home : {
    screen : Home
  },
  List : {
    screen : List
  },
  Detail : {
    screen : Detail
  }
});

export default Navigator
