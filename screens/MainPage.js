import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, Button} from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation'

import {getHeroes, getAllHeroes} from '../actions';

import DetailPage from './DetailPage';

class HomePage extends React.Component {
  constructor () {
    super();
  }

  componentWillMount () {
    this.props.fetchHeroes();
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList data={this.props.people}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => <Button 
              onPress={() => { this.props.navigation.navigate('Detail', {person: item})}}
            title={item.name}/>}></FlatList>
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  console.log('isi statenya ', state)
  return {
    people: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: () => {
      dispatch(getAllHeroes())
    },
    setHeroes: (heroes) => {
      dispatch(getHeroes(heroes))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});