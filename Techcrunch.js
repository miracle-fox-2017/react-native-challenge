import React from 'react';
import { StyleSheet, Text, View, ListView, Image, ScrollView, Button, FlatList, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import TechcrunchDetail from './TechcrunchDetail'
import {connect} from 'react-redux'
import {fetchnewstechrunch} from './actions/techcrunch'

class Techcrunch extends React.Component {

  constructor () {
    super()
    this.state = {
      articles: []
    }
  }

  _keyExtractor = (item, index) => item.url

  componentDidMount() {
    this.props.fetchnewstechrunch()
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView style={styles.bigblue}>
        <FlatList
          data={this.props.articles}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => {
            return(
              <View>
                <View style={styles.redblue}>
                <Image style={{width: 100, height: 100}} source={{uri:item.urlToImage}}/>
                <Text style={{width: 250, height: 100}}>{item.title}</Text>
              </View>
              <Button title="Detail" onPress={() => navigate('TechcrunchDetail', {title:item.title, description: item.description, urlToImage: item.urlToImage})}/>
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
    articles: state.techcrunchReducer.techcrunchArticles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchnewstechrunch: () => dispatch(fetchnewstechrunch())
  }
}

const connectedTechcrunch = connect(mapStateToProps, mapDispatchToProps)(Techcrunch)
export default connectedTechcrunch;
