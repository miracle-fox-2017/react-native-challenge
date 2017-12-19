import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, ListView, Image, ScrollView } from 'react-native'
import axios from 'axios'

export default class DetailRestauran extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      restauranDetail: ''
    }
  }
  getDetailRestaurant (resID) {
    axios.get(`http://developers.zomato.com/api/v2.1/restaurant?res_id=${resID}`,{
      headers : {
        'user-key' : '6f7e7987e70dc105330926821cabef62'
      }
    })
    .then(({data}) => {
      this.setState({
        restauranDetail: data
      })
    })
    .catch(err => console.error(err))
  }
  render(){
    return(
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>{this.state.restauranDetail.name}</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.state.restauranDetail.thumb}}
        />
      </View>
    );
  }
  componentWillMount() {
    this.getDetailRestaurant(this.props.navigation.state.params.id)
  }
  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   restauranDetail: nextProps
    // })
  }
}
