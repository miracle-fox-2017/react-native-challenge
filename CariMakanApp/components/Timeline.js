import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, ListView, Image } from 'react-native'
import { SearchBar } from 'react-native-elements'
import TimelineItem from './TimelineItem'
import SearchBarComponent from './SearchBar'
import axios from 'axios'

export default class Timeline extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      restauranList: ''
    };
  }
  getKemangRestauran () {
    axios.get(`http://developers.zomato.com/api/v2.1/locations?query=kemang`,{
      headers : {
        'user-key' : '6f7e7987e70dc105330926821cabef62'
      }
    })
    .then(response => {
      if(response.data.location_suggestions[0] === undefined) {
        alert('Kagak ada tempat makan tong')
      } else {
        let enId = response.data.location_suggestions[0].entity_id
        let enTy = response.data.location_suggestions[0].entity_type
        axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${enId}&entity_type=${enTy}`,{
          headers : {
            'user-key' : '6f7e7987e70dc105330926821cabef62'
          }
        })
        .then((responseDetail) => {
          let detailLocation = responseDetail.data
          this.setState({
            restauranList: detailLocation.best_rated_restaurant
          })
        })
        .catch(error => {
          console.error(error)
        })
      }})
      .catch(error => {
        console.error(error)
      })
  }
  render() {
    if(this.state.restauranList === '') {
      return (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>Mohon Tunggu</Text>
        </View>
      )
    }
    contents = this.state.restauranList.map(function (item, index) {
      return (
        <View key={index}>
          <Text>{item.restaurant.name}</Text>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: item.restaurant.thumb}}
          />
          <Button title='Detail'/>
        </View>
      )
    })
    // contents = () => {
    //   return (
    //     <ListView
    //     dataSource={this.state.restauranList}
    //     renderRow={(item) => {
    //         <Text>{item}</Text>
    //     }}
    //   />
    //   )
    // }
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View>
        {contents}
        </View>
      </View>
    )
  }
  componentWillMount() {
    this.getKemangRestauran()
  }
}
