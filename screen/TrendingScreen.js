import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity } from 'react-native'
import axios from 'axios'
import action from '../actions/gifAction'
import { StackNavigator } from 'react-navigation'

class TrendingScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Trending Gif',
    headerStyle: { marginTop: 24 },
  }

  constructor(props) {
    super()
    this.state = {
      images: [],
      loading: false
    }
  }

  componentDidMount(){
    this.props.getTrending()
  }

  // componentWillMount(){
  //   this.props.getTrending()
  // }

  updateData(){
    this.setState({
      loading: true
    })
    alert('refreshing...')
    this.setState({
      loading: false
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ padding: 10 }}>
        <FlatList
          onRefresh={ () => this.updateData() }
          refreshing={ this.state.loading }
          data={this.props.getGif}
          keyExtractor = {(item, index) => index}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={ () => alert('terpencet')}
              >
                <View style = {{
                                marginBottom: 5,
                                flexDirection: 'row'
                              }}
                  >
                  <Image
                      style={{width: 30, height: 30}}
                      source={{uri: item.images.fixed_width_small.url}}
                  />
                  <Text>{item.slug}</Text>
                </View>
              </TouchableOpacity>
            )}
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    getGif: state.trendingReducer.trending
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getTrending: () => dispatch(action.getTrending())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingScreen)
// export default TrendingScreen
