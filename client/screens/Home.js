import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView, ActivityIndicator,FlatList,ImageBackground } from 'react-native';
import axios from 'axios'
import Details from './Details'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation';
import { getNewsFromAPI } from '../actions'

class HomeScreen extends React.Component {
  constructor () {
    super ()
    this.state = {
      news: [],
      loading: false,
      refreshing: false
    }
  }

  componentWillMount () {
    this.setState({loading: false})
    this.props.getNewsFromAPI()
    this.setState({loading: true})
  }


  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={{marginTop: 20, flex: 1, backgroundColor: '#F0FFFF'}}>
      {(this.props.news.length === 0) ? <ActivityIndicator size="large" color="#0000ff" /> : <Text></Text> }
      <FlatList
        data={this.props.news}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={styles.baseText}>{ item.title }</Text>
              <Image style={{width: 200, height: 200, margin:60}} source={{ uri: item.urlToImage }}></Image>
              <Text style={styles.baseText}>{ item.description }</Text>
              <Button title="Details" onPress={() => navigate('Details', {data: item })}></Button>
            </View>
          )
        }}
      />
      </View>

    )
  }
}

const mapState = (state) => {
  console.log(state);
  return {
    news : state.News.news
  }
}

const mapAction = (dispatch) => {
  return {
    getNewsFromAPI: () => dispatch(getNewsFromAPI())
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default connect (mapState, mapAction)(HomeScreen)
