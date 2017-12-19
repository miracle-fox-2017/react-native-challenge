import React from 'react';
import { Image, View, Touchable, Text } from 'react-native'
import { RkCard, RkButton, RkTheme, RkStyleSheet, RkModalImg } from 'react-native-ui-kitten'

const Cards = (props) => {
  RkTheme.setType('RkCard', 'story', {
    img: {
      height: 200,
    },
    header: {
      alignSelf: 'center'
    },
    content:{
      alignSelf:'center'
    },
    footer:{
      alignSelf:'center',
      flex: 1
    }
  });

  RkTheme.setType('RkModalImg','small',{
    img:{
      width: 50,
      height: 50,
      borderRadius: 10
    }
  });

  return (
    <View style={styles.card}>
      <RkCard rkType='story'>
        <View rkCardHeader>
          <Text>{props.game.name}</Text>
        </View>
        <RkModalImg rkCardImg source={{uri: props.game.image.medium_url}}/>
        <View rkCardContent>
          <Text>{props.game.deck}</Text>
        </View>
        <View rkCardFooter>
          <RkButton rkType='small' onPress={() => props.navigation.navigate('about')}>Read More</RkButton>
        </View>
      </RkCard>
    </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  card: {
    marginHorizontal: 10,
    marginVertical: 5
  }
})
);

export default Cards