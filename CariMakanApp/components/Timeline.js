import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ListView, Image, ScrollView, FlatList } from 'react-native'
import { Button, ListItem, List} from 'react-native-elements'
import axios from 'axios'
import { getData } from '../actions'

class Timeline extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      restauranList: ''
    };
  }
  render() {
    if(this.props.restaurantList === '') {
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
    return (
      <View>
        <List>
        <FlatList
          data={this.props.restaurantList}
          renderItem={({item}) => (
            <ListItem
              roundAvatar
              title={item.restaurant.name}
              avatar={{ uri: item.restaurant.thumb}}
              onPressRightIcon={() => this.props.navigation.navigate('Details', {id: item.restaurant.id})}
            />
          )}
          keyExtractor={(item) => item.restaurant.id}
        />
        </List>
      </View>
    )
  }
  componentWillMount() {
    this.props.getData()
  }
}

const mapStateToProps = state => {
  return {
    restaurantList: state.restaurantList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () =>{
      dispatch(getData())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)
