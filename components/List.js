import React,{Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class List extends Component {
  static navigationOptions = () => ({
    title : 'List of Rockets'
  });
  render(){
    const {navigate,state} = this.props.navigation;
    return(
      <ScrollView>
        {state.params.rockets.map((data,i) => {
          return (
            <View key={i} style={styles.box}>
              <Image
                source={{uri : 'https://storage.googleapis.com/library.tomybudiman.cf/first-react-native/spacex-cover.jpg'}}
                style={styles.image}
              />
            <View style={styles.desc}>
                <Text>Name : {data.name}</Text>
                <Text style={{lineHeight : 30}}>Description : {data.description}</Text>
                <Text style={{lineHeight : 30}}>Cost Per Launch : ${data.cost_per_launch}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  box : {
    width: '85%',
    marginTop : 15,
    borderRadius : 5,
    marginBottom : 15,
    overflow : 'hidden',
    alignSelf : 'center',
    shadowColor : 'rgba(0,0,0,.3)',
    backgroundColor : '#FFF'
  },
  image : {
    width : '100%',
    height : 200
  },
  desc : {
    padding : 10
  }
});

export default List
