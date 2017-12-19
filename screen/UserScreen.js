import React, { Component } from 'react'
import { Text } from 'react-native'

class UserScreen extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <View>
        <Text> this is user screen </Text>

        <Button
          title='go to user' onPress={ () => navigate('Home')} />
      </View>
    )
  }
}

export default UserScreen
