import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import axios from 'axios'
import action from '../actions/gifAction'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Randomize Gif',
    headerStyle: { marginTop: 24 },
  }

  constructor(props) {
    super()
    this.state = {
      headers: "An application for change your mood",
      mood: {
        image_url: 'https://media.giphy.com/media/KDBkZDXoHQl9K/giphy.gif',
        fixed_width_small_url: 'https://media.giphy.com/media/KDBkZDXoHQl9K/giphy.gif'
      }
    }
  }

  componentDidMount(){
    this.props.getRandom()
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View>
          <Image
              style={{width: 300, height: 300}}
              source={{uri: this.props.gifRandom.fixed_width_small_url}}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title='re-roll' onPress={ () => this.props.getRandom()} />
          <Button
            title='Trending gif' onPress={ () => navigate('Trending')} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    gifRandom: state.trendingReducer.random
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getRandom: () => dispatch(action.random())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
