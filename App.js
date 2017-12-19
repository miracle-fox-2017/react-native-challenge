import React from 'react';
import Expo from 'expo'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation'
import screenHome from './src/screens/screenHome'
import screenFind from './src/screens/screenFind'
import screenDetail from './src/screens/screenDetail'
// import Footers from './src/screens/footerMenu'

const Navigator = TabNavigator({
  Home: {
    screen: screenHome,
    navigationOptions: {
      headerTitle: 'Home',
    } 
  },
  Find: {
    screen: screenFind,
    navigationOptions: {
      headerTitle: 'Find',
    }
  },
  Detail: {
    screen: screenDetail,
    navigationOptions: {
      headerTitle: 'Detail',
    }
  }
},{
    tabBarPosition: 'bottom'
})
export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isReady: false
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({
      isReady:true
    })
  }
  render() {
    if(!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Container>
        <Navigator/>
      </Container>
    );
  }
}
