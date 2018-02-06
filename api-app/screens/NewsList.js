import React from 'react';
import { StyleSheet, Text, View, Button, ListView, Image, Linking, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchDataApi } from '../actions/newsAction'

class NewsList extends React.Component {
  constructor() {
    super()
    this.state = {
      news: [],
      loading: true
    }
  }
  _keyExtractor = (item, index) => item.url

  componentWillMount() {
    this.props.fetchData()
    this.setState({
      loading: false
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      
      <ScrollView>
         {this.state.loading ?  <ActivityIndicator size="large" color="#0000ff" /> :
         
         
         (<View>
           <Text style={style.header}>
          News List
        </Text>
        <FlatList
          data={this.props.news}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => {
            return (
              <View key={item.url} style={style.wrapper}>
                <Text style={style.item}  >
                  {item.title}
                </Text>
                <Image source={{ uri: item.urlToImage }} style={style.image} />
                <Text style={style.detail}
                  onPress={() => navigate('NewsDetail', { data: item })}>
                  See More
                </Text>

              </View>
            )
          }} />
          </View>) } 
        
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  item: {
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginTop: 5
  },

  header: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ff4d4d',
    color: 'white'
  },
  image: {
    width: 100,
    height: 80,
  },
  detail: {
    textAlign: 'center',
    color: '#0099cc',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchDataApi())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)