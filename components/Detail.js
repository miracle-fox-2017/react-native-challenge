import React,{Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

class Detail extends Component {
  constructor(){
    super();
    this.state = {
      headerTitle : 'Tomy'
    }
  }
  static navigationOptions = ({navigation}) => {
    return({
      title : navigation.state.params.rocket.name
    });
  }
  render(){
    const {rocket} = this.props.navigation.state.params;
    return(
      <View style={{backgroundColor : '#F1F1F1', height : '100%'}}>
        <View style={styles.wrapper}>
          <Image
            source={require('../media/spacex-cover.jpg')}
            style={styles.imageHeader}/>
          <View style={{padding : 10}}>
            {/* Name */}
            <Text style={styles.labelInfo}>Name :</Text>
            <Text style={styles.contentInfo}>{rocket.name}</Text>
            {/* Country */}
            <Text style={styles.labelInfo}>Country :</Text>
            <Text style={styles.contentInfo}>{rocket.country}</Text>
            {/* Description */}
            <Text style={styles.labelInfo}>Description :</Text>
            <Text style={styles.contentInfo}>{rocket.description}</Text>
            {/* Width */}
            <Text style={styles.labelInfo}>Width :</Text>
            <Text style={styles.contentInfo}>{rocket.diameter.meters} Meters</Text>
            {/* Height */}
            <Text style={styles.labelInfo}>Height :</Text>
            <Text style={styles.contentInfo}>{rocket.height.meters} Meters</Text>
            {/* Weight */}
            <Text style={styles.labelInfo}>Mass :</Text>
            <Text style={styles.contentInfo}>{rocket.mass.kg} Kg</Text>
          </View>
        </View>
      </View>
    )
  }
}

const {width,height} = Dimensions.get('window');

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
    resizeMode : 'cover',
    height : height * 0.4
  },
  labelInfo : {
    fontSize : 18,
    fontWeight : 'bold'
  },
  contentInfo : {
    fontSize : 18
  }
});

export default Detail;
