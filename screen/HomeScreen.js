import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, Image, ActivityIndicator } from 'react-native'
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
      loading: false
    }
  }

  reRoll(){
    this.setState({ loading: true })
    this.props.getRandom()
    this.setState({ loading: false })
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.props.getRandom()
    this.setState({ loading: false })
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
          {this.state.loading &&
            <ActivityIndicator
              color = '#bc2b78'
              size = "large"
            />
          }
          <Image
              style={{width: 300, height: 300, marginBottom: 10}}
              source={{uri: this.props.gifRandom.image_url}}
          />
        </View>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Button
            title = 're-roll'
            onPress={ () => this.reRoll() } />
          <Button
            title = 'Trending gif'
            onPress={ () => navigate('Trending')} />
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
