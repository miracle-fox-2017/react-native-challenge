import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BBC from './BBC'
import Techcrunch from './Techcrunch'
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text style={{margin: 20}}>Selamat datang di News Aja</Text>
        <Button title="BBC" onPress={() => navigate('BBC')}/>
        <Button title="Techcrunch" onPress={() => navigate('Techcrunch')}/>
      </View>
    );
  }
}
