import React from 'react'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


export default class Search extends React.Component {
  constructor() {
    super()

  }
  render() {
      return (
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text onChange={() => {this.handleSearch()}}>Search</Text>
            </Button>
          </Header>
        </Container>
      );
    }

  handleSearch(e) {
    console.log(e)
  }
}