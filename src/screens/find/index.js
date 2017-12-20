import React, { Component } from "react";
import screenFind from "./screenFind";
import screenDetail from "./screenDetail";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Find: { screen: screenFind },
  Detail: { screen: screenDetail }
}));
