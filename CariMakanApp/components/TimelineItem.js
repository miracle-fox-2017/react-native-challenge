import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { SearchBar } from 'react-native-elements'

const HomeScreen = ({ navigation }) => (

    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Beranda</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title='Go to details'
      />
    </View>
)

export default HomeScreen
