import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, ListView, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import axios from 'axios'
import { getDetailData } from '../actions'

class DetailRestauran extends Component {
  constructor(props){
  	super(props)
  }
  render(){
    return(
      <Card
        title={this.props.detailData.name}
        image={{uri : this.props.detailData.thumb }}
      >
      <Text>average cost for two: Rp. {this.props.detailData.average_cost_for_two} </Text>
      <Text>Cuisines: {this.props.detailData.cuisines}</Text>
      </Card>
    );
  }
  componentWillMount() {
    this.props.getDetailData(this.props.navigation.state.params.id)
  }
}

function mapStateToProps(state) {
  return {
    detailData: state.restaurantDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDetailData: (resID) => {
      dispatch(getDetailData(resID))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailRestauran)
