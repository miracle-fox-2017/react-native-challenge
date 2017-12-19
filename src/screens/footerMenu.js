import React, { Component } from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
// import screenFind from './src/screens/screenFind'
export default class Footers extends Component {
  render() {
    console.log()
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Home</Text>
          </Button>
          <Button vertical >
            <Icon name="search" />
            <Text>Find</Text>
          </Button>
          <Button vertical>
            <Icon name="barcode" />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
