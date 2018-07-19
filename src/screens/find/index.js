import React, { Component } from "react";
import ScreenFind from './screenFind'
import ScreenDetail from './screenDetail'
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Find: { screen: ScreenFind },
  Detail: { screen: ScreenDetail }
},
{ initialRouteName: 'Find'
}));
