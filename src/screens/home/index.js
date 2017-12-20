import React, { Component } from "react";
import HomeScreen from "./screenHome";
import MainScreenFind from "../find";
import SideBar from "../SideBar";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Find: { screen: MainScreenFind }
  },
  {
    contentComponent: props => <SideBar { ...props } />
  }
);
export default HomeScreenRouter;
