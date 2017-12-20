// import React from 'react';
// import Expo from 'expo'
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
// import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
// import screenHome from './src/screens/home/index.js'
// // import screenFind from './src/screens/screenFind'
// // import screenDetail from './src/screens/screenDetail'
// // import SideBar from './src/screens/SideBar'
// // import Footers from './src/screens/footerMenu'

// // const Navigator = DrawerNavigator(
// //   {
// //     Home: {
// //       screen: screenHome,
// //       navigationOptions: {
// //         headerTitle: 'Home',
// //       } 
// //     },
// //     Find: {
// //       screen: screenFind,
// //       navigationOptions: {
// //         headerTitle: 'Find',
// //       }
// //     },
// //     Detail: {
// //       screen: screenDetail,
// //       navigationOptions: {
// //         headerTitle: 'Detail',
// //       }
// //     }
// //   },
// //   {
// //     contentComponent: props => <SideBar {...props} />
// //   }
// // )
// export default class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       isReady: false
//     }
//   }
//   async componentWillMount() {
//     await Expo.Font.loadAsync({
//       'Roboto': require('native-base/Fonts/Roboto.ttf'),
//       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//     });
//     this.setState({
//       isReady:true
//     })
//   }
//   render() {
//     if(!this.state.isReady) {
//       return <Expo.AppLoading />
//     }
//     return (
//       <screenHome/>
//     //   <Container>
//     //     <Navigator/>
//     //   </Container>
//     );
//   }
// }
import React, { Component } from "react";
import Expo from "expo";
import HomeScreen from "./src/HomeScreen/index.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />;
  }
}
