import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

import { getAllGames } from '../actions/index'

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: { marginTop: 24 }
  }

  componentWillMount() {
    this.props.getAllGames()
  }

  render() {
    return (
      <View>
        {
          this.props.games.length <= 0 ? <ActivityIndicator style={{marginTop: 150}} size="large" color="#0000ff"/>
          :
          <FlatList
            style={styles}
            data={this.props.games}
            keyExtractor={(item => item.id)}
            renderItem={({item}) =>
              <View style={styles.card}>
                <Image source={{uri: item.image.medium_url}} style={styles.cardImage}/>
                <View style={styles.description}>
                  <Text style={styles.titleText}>{item.name}</Text>
                  <Text>{item.deck}</Text>
                </View>
                <Button onPress={() => {this.props.navigation.navigate('detail', {id: item.guid})}} title='Read More'/>
              </View>
            }
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.1,
    borderRadius: 2,
    borderColor: '#000',
    height: 300,
    flex: 2,
    marginVertical: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10
  },
  cardImage: {
    flex: 1
  },
  description: {
    padding: 10,
  },
  titleText: {
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 5,
  },
  touch: {
    height: 80,
    backgroundColor: 'blue',
  }
})

function mapStateToProps(state) {
  console.log(state)
  return {
    games: state.HomeReducer.games
  }
}

function mapDispatchToProps(dispatch) {
  console.log('masuk props dispatch')
  return {
    getAllGames: () => dispatch(getAllGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
