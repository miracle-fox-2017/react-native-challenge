import React from 'react';
import { Image, View } from 'react-native'
import { Button, Content, Text, Header, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base'

const Cards = (props) => {
  return (
    <View>
      <Header />
        <Card style={{flex: 0}}>
          <CardItem>
            <Body>
              <Text>{props.game.name}</Text>          
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../assets/img/sample.jpg')}/>
          </CardItem>
        </Card>
    </View>
  )
}

export default Cards