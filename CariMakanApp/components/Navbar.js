import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { SearchBar } from 'react-native-elements'

import HomeScreen from './Timeline'

const DetailsScreen = () => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <Text>Detail Restauran</Text>
  </View>
)

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details'
    }
  }
});

export default RootNavigator
