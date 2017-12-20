import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text,
  View,
  Button,
  Image,
  FlatList } from 'react-native'
import axios from 'axios'
import getTrendings from '../actions/gifAction'

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
    return (
      <View style={{ padding: 10 }}>
        <FlatList
          onRefresh={ () => this.updateData() }
          refreshing={ this.state.loading }
          data={this.props.getGif}
          renderItem={({item}) => {
            keyExtractor = (item, index) => item.id
            return (
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
    getTrending: () => dispatch(getTrendings.getTrending())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingScreen)
// export default TrendingScreen
