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
        <Text>Name: {state.params.person.name}</Text>
        <Text>Gender: {state.params.person.gender}</Text>
        <Text>Eye Color: {state.params.person.eye_color}</Text>
        <Text>Hair Color: {state.params.person.hair_color}</Text>
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
    fontSize: 18,
    height: 44,
  }
});