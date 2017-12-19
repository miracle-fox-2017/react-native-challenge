import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome to News Portal'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Button title="News List"
        onPress={() => navigate('News')} />
    )
  }
}

export default Home