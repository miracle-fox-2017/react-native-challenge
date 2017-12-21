import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation'

class HeroDetail extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    console.log('data yang diperoleh', this.props)
  }
  render () {
    const {state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Name: {state.params.person.name}</Text>
        <Text style={styles.item}>Gender: {state.params.person.gender}</Text>
        <Text style={styles.item}>Eye Color: {state.params.person.eye_color}</Text>
        <Text style={styles.item}>Hair Color: {state.params.person.hair_color}</Text>
      </View>
    )
  }
}

export default HeroDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
    widht: 10,
    height: 10,
    backgroundColor: 'powderblue'
  }
});