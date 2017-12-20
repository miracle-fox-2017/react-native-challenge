import React from 'react';
import Expo from 'expo'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import ScreenHome from './src/screens/home/screenHome.js'
import ScreenFind from './src/screens/find/screenFind'
import ScreenDetail from './src/screens/find/screenDetail'
import {Provider} from 'react-redux'
import store from './src/store'

const Navigator = StackNavigator(
  {
    Home: {
      screen: ScreenHome,
      navigationOptions: {
        headerTitle: 'Home',
      } 
    },
    Find: {
      screen: ScreenFind,
      navigationOptions: {
        headerTitle: 'Find',
      }
    },
    Detail: {
      screen: ScreenDetail,
      navigationOptions: {
        headerTitle: 'Detail',
      }
    }
  }
)
export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isReady: false,
      selectedTab: 'Home'
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
  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'Home':
        return (<ScreenHome />);
        break;
      case 'Find':
        return (<ScreenFind />);
        break;
      case 'About':
        return (<ScreenHome />);
        break;
      default: 
    }
  }
  render() {
    if(!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Container style={{ marginTop: 25}}>
          <Content style={{  padding: 15}}>
            {this.renderSelectedTab()}
          </Content>
          <Footer>
            <FooterTab>
              <Button 
                vertical
                active={this.state.selectedTab==='Home'}
                onPress={() => this.setState({selectedTab: 'Home'})}
                >
                <Icon name="apps" />
                <Text>Home</Text>
              </Button>
              <Button 
                vertical
                active={this.state.selectedTab==='Find'}
                onPress={() => this.setState({selectedTab: 'Find'})}
                >
                <Icon name="search" />
                <Text>Find</Text>
              </Button>
              <Button 
                vertical
                active={this.state.selectedTab==='Home'}
                onPress={() => this.setState({selectedTab: 'Home'})}
                >
                <Icon name="barcode" />
                <Text>About</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    );
  }
}
