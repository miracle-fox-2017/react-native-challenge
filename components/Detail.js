import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

class Detail extends Component {
  render(){
    const {rocket} = this.props.navigation.state.params;
    console.log(rocket);
    return(
      <View style={{backgroundColor : '#F1F1F1', height : '100%'}}>
        <View style={styles.wrapper}>
          <Image
            source={{uri : 'https://storage.googleapis.com/library.tomybudiman.cf/first-react-native/spacex-cover.jpg'}}
            style={styles.imageHeader}/>
          <View style={{padding : 10}}>
            <Text style={styles.labelInfo}>Name :</Text>
            <Text style={styles.labelInfo}>Description :</Text>
            <Text style={styles.labelInfo}>Width :</Text>
            <Text style={styles.labelInfo}>Height :</Text>
            <Text style={styles.labelInfo}>Weight :</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper : {
    width : '85%',
    marginTop : 25,
    borderRadius : 5,
    marginBottom : 25,
    overflow : 'hidden',
    alignSelf : 'center',
    backgroundColor : '#FFF'
  },
  imageHeader : {
    width : '100%',
    height : 200
  },
  labelInfo : {
    fontWeight : 'bold'
  }
});

export default Detail;
