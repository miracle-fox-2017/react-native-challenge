import React  from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Image, Left, View, Input, Item, List, ListItem, Body, Right, Thumbnail, Card, CardItem } from 'native-base';
import Axios from 'axios'
import { FlatList } from "react-native";
import Modal from 'react-native-modal'
import {connect} from 'react-redux'

import {
  TouchableOpacity
} from 'react-native'

export default class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      result: [],
      isModalVisible: false,
      specification: '',
      image: ''
    }
  }
  _showModal = (specs) => {
    console.log('INI SPECS', specs)
    Axios.get(`https://price-api.datayuge.com/api/v1/compare/specs?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&id=${specs.product_id}`)
      .then(({data}) => {
        console.log('SPESIFIKASI', data)
        this.setState({
          specification: data.data,
          image: specs.product_image,
          isModalVisible: true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  _hideModal = () => this.setState({ isModalVisible: false })

  _renderModalContent = () => {
    if(this.state.specification) {
      return (
        <View>
          <Button 
              transparent 
              textStyle={{color: '#fff'}}
              onPress={() => this._hideModal()}
              >
              <Icon name="close-circle" />
            </Button>
            <Thumbnail square large source={{uri: this.state.image}} />
          <FlatList
            data={this.state.specification.main_specs}
            renderItem={({ item }) => (
              <Text>{item}</Text>
            )}
          />
        </View>
      )
    }
  };

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
              <FlatList
                data={this.state.result}
                keyExtractor = { item => item.product_id}
                renderItem = { ({item}) => (
                  <ListItem>
                    <Thumbnail 
                      square 
                      size={80} 
                      source={{ uri: item.product_image }} />
                    <Body>
                      <Text>{item.product_title}</Text>
                      <Text note>Harga: Rp.{item.product_lowest_price * 211}, rating: {item.product_rating}</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity
                        onPress={ () => this._showModal({ product_id: item.product_id, product_image: item.product_image }) }
                      >
                        <Text>Specs</Text>
                      </TouchableOpacity>
                    </Right>
                  </ListItem>
                  )
                } />
          </List>
          <Modal
            backdropOpacity={1}
            backdropColor={'#CED0CE'}
            animationIn={'zoomInDown'}
            animationOut={'zoomOutUp'}
            animationInTiming={1000}
            animationOutTiming={1000} 
            isVisible={this.state.isModalVisible}>
            {this._renderModalContent()}
        </Modal>
        </Content>
      </Container>
    );
  }
}