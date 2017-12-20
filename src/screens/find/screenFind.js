import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Input, Item, List, ListItem, Body, Right, Thumbnail } from 'native-base';
import Axios from 'axios'
import screenDetail from './screenDetail'
import { StackNavigator } from "react-navigation";

import {
  TouchableOpacity
} from 'react-native'

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      result: []
    }
  }
  
  findCompare = () => {
    console.log('MASUK', this.state.brand)
    if(this.state.brand !== '') {
      // https://price-api.datayuge.com/api/v1/compare/specs?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&id=${localprops.product_id}`)
      Axios.get(`https://price-api.datayuge.com/api/v1/compare/search?product=${this.state.brand}&api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB`)
      .then(({data}) => {
        console.log(data.data)
        this.setState({
          brand: '',
          result: data.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      alert('Please fill the blank')
    }
  }
  reset = () => {
    this.setState({
      brand: '',
      result: []
    })
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Input 
              name='brand' value={this.state.brand} 
              onChangeText={(brand) => this.setState({brand})} 
              placeholder='Insert brand mobile' />
          </Item>
          <Button 
            block
            iconRight
            success
            onPress = { ()=> this.findCompare()}
            >
            <Text>Find</Text>
            <Icon name='search' />
          </Button>

          <Button 
            block
            iconRight
            light
            onPress = { ()=> this.reset()}
            >
            <Text>Clear</Text>
            <Icon name='backspace' />
          </Button>
          {/* LIST */}
          {/* can_compare:true
product_category:"mobile"
product_id:"ZToxMjI1MA"
product_image:"http://images-api.datayuge.in/image/MTIyNTAtNjktMQ.jpg"
product_link:"https://price-api.datayuge.com/api/v1/compare/detail?id=ZToxMjI1MA"
product_lowest_price:16400
product_rating:4.2
product_sub_category:"mobile"
product_title:"Oppo F3" */}
          <List>
            {this.state.result.map((phone, i) => {
              return (
                <ListItem key={i}>
                  <Thumbnail 
                    square 
                    size={80} 
                    source={{ uri: phone.product_image }} />
                  <Body>
                    <Text>{phone.product_title}</Text>
                    <Text note>Harga: Rp.{phone.product_lowest_price * 211}, rating: {phone.product_rating}</Text>
                  </Body>
                  <Right>
                    <TouchableOpacity
                      onPress={ ()=> this.props.navigation.navigate('Detail', { product_id: phone.product_id, product_image: phone.product_image }) }
                    >
                      <Text>Specs</Text>
                    </TouchableOpacity>
                  </Right>
                </ListItem>
              )
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
Find.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Find</Title>
      </Body>
      <Right />
    </Header>
  )
});