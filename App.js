import React from 'react';
import Expo from 'expo'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import screenHome from './src/screens/home/index.js'
import screenFind from './src/screens/find/screenFind'
import screenDetail from './src/screens/find/screenDetail'
// import Footers from './src/screens/footerMenu'

const Navigator = StackNavigator(
  {
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
        return (<screenHome />);
        break;
      case 'Find':
        return (<screenFind />);
        break;
      case 'About':
        return (<screenHome />);
        break;
      default:
    }
  }
  render() {
    if(!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Container>
        <Header/>
          {/* <Navigator/> */}
        <Content>
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
    );
  }
}
