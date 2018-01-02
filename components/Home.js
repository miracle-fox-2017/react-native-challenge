import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

class Home extends Component {
  static navigationOptions = () => ({
    title : 'First React Native'
  });
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.wrapper}>
        <Image
          source={{uri : 'https://storage.googleapis.com/library.tomybudiman.cf/first-react-native/spacex-front.jpg'}}
          style={styles.image}/>
        <View style={styles.button}>
          <Button
            title="Show Rockets"
            onPress={() => navigate('List')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
    justifyContent : 'center'
  },
  image : {
    width : 130,
    height : 130,
    borderRadius : 65,
    alignSelf : 'center'
  },
  button : {
    width : 200,
    marginTop : 20,
    alignSelf : 'center'
  }
});

export default Home;
