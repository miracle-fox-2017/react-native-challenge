import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, 
  FooterTab, Button, Icon, List, ListItem, H2, 
  Title, Left, Right, Body, 
  Card, CardItem} from 'native-base';
  import { StatusBar } from "react-native";
import Axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSuggest : [],
      suggest: ''
    }
  }
  componentWillMount() {
    // https://price-api.datayuge.com/api/v1/compare/search/suggest?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&product=Oppo
    // https://price-api.datayuge.com/api/v1/compare/search?product=oppo&api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB
    let update = 'Iphone'
    let angka = Math.floor(Math.random() * 10) + 1;
    if(angka === 10){
      update = 'Iphone'
    } else if (angka === 9) {
      update = 'Vivo'
    } else if (angka === 8) {
      update = 'Asus'
    } else if (angka === 7) {
      update = 'Oppo'
    } else if (angka === 6) {
      update = 'Xiaomi'
    } else if (angka === 5) {
      update = 'Huawei'
    } else if (angka === 4) {
      update = 'OnePlus'
    } else if (angka === 3) {
      update = 'Lenovo'
    } else if (angka === 2) {
      update = 'Mito'
    } else if (angka === 1) {
      update = 'Nokia'
    }
     Axios.get(`https://price-api.datayuge.com/api/v1/compare/search/suggest?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&product=${update}`)
     .then(({data}) => {
      //  console.log(data.keywords)
       this.setState({
         listSuggest: data.keywords,
         suggest: update
       })
     })
     .catch(err => {
       console.log(err)
     })
  }
  render() {
    return (
      <Container>
        <Text>HOME</Text>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem itemHeader first>
            <Text>Keyword searching today: </Text>
              <H2>{this.state.suggest}</H2>
            </ListItem>
            {this.state.listSuggest.map((list, i) => {
              return (
                <ListItem key={i}>
                  <Text>{list}</Text>
                </ListItem>
              )
            })}
          </List>
        </Content>
      </Container>
    );
  }
}