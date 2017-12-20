import React  from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Spinner, Image, Left, View, Input, Item, List, ListItem, Body, Right, Thumbnail, Card, CardItem } from 'native-base';
import Axios from 'axios'
import { FlatList } from "react-native";
import Modal from 'react-native-modal'
import {connect} from 'react-redux'
import {findCompare, getSpecs} from '../../actions'

import {
  TouchableOpacity
} from 'react-native'

export class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      result: [],
      isModalVisible: false,
      specification: '',
      image: '',
      loading : false
    }
  }
  _showModal = (specs) => {
    console.log('INI SPECS', specs)
    this.props.getSpecs(specs)
    this.setState({
      image: specs.product_image,
      isModalVisible: true
    })
  }

  _hideModal = () => this.setState({ isModalVisible: false })

  _renderModalContent = () => {
    if(!this.props.specification) {
      return (
        <Spinner color='red' />
      )
    } else {
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
            data={this.props.specification.main_specs}
            renderItem={({ item }) => (
              <Text>{item}</Text>
            )}
          />
        </View>
      )
    }
  };
  reset = () => {
    this.setState({
      brand: '',
      result: []
    })
  }
  compare = () => {
    this.props.findCompare(this.state.brand)
    this.setState({
      brand: '',
      loading: true
    })
  }
  render() {
    status = ''
    if(this.state.loading && this.props.compare.length === 0){
      status = <Spinner/>
    } else {
      status = <List>
                <FlatList
                  data={this.props.compare}
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
    }
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
            onPress = { ()=> this.compare()}
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
          {status}
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
const mapStateToProps = (state) => {
  return {
    compare: state.reducerFind.compare,
    specification: state.reducerFind.specification
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    findCompare: (input) => dispatch(findCompare(input)),
    getSpecs: (input) => dispatch(getSpecs(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)