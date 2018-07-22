import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView, Button, FlatList, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BBCDetail from './BBCDetail'
import axios from 'axios'
import {fetchnewsbbc} from './actions/bbc'

class BBC extends React.Component {

  constructor () {
    super()
    this.state = {
      articles: [],
      loading: true
    }
  }

  _keyExtractor = (item, index) => item.url

  componentDidMount() {
    this.props.fetchnewsbbc()
    this.setState({
      loading: false
    })
  }

  render() {
    const {navigate} = this.props.navigation
    console.log(this.state.loading)
    return (
      <ScrollView style={styles.bigblue}>
        <FlatList
          data={this.props.articles}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => {
            return(
              <View style={{marginBottom: 10}}>
                <View style={styles.redblue}>
                  <Image style={{width: 100, height: 100}} source={{uri:item.urlToImage}}/>
                  <Text style={{width: 250, height: 100}}>{item.title}</Text>
                </View>
                <Button title="Detail" onPress={() => navigate('BBCDetail', {title:item.title, description: item.description, urlToImage: item.urlToImage})}/>
              </View>
            )
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    flex: 1
  },

  redblue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  }
});

const mapStateToProps = (state) => {
  return {
    articles: state.bbcReducer.bbcArticles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchnewsbbc: () => dispatch(fetchnewsbbc())
  }
}

const connectedBBC = connect(mapStateToProps, mapDispatchToProps)(BBC)
export default connectedBBC;
