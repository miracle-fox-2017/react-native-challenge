import React,{Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import axios from 'axios';

class List extends Component {
  static navigationOptions = () => ({
    title : 'List of Rockets'
  });
  constructor(){
    super();
    this.state = {
      rockets : []
    }
  }
  componentWillMount(){
    axios.get('https://api.spacexdata.com/v2/rockets').then(({data}) => {
      this.setState({
        rockets : data
      });
    }).catch(err => {
      console.log(err);
    });
  }
  render(){
    if(this.state.rockets.length === 0){
      return(
        <View style={{height : '100%', flex : 1, justifyContent : 'center'}}>
          <Image style={{alignSelf : 'center'}} source={require('../media/loading.gif')}/>
        </View>
      )
    }else{
      return(
        <ScrollView>
          {this.state.rockets.map((data,i) => {
            return (
              <View key={i} style={styles.box}>
                <Image
                  source={{uri : 'https://storage.googleapis.com/library.tomybudiman.cf/first-react-native/spacex-cover.jpg'}}
                  style={styles.image}/>
                <View style={styles.desc}>
                  <Text style={styles.text}>Name : {data.name}</Text>
                  <Text style={styles.text}>Cost Per Launch : ${data.cost_per_launch}</Text>
                  <View style={styles.moreDetail}>
                    <Button
                      title="More Detail"
                      onPress={() => navigate('Detail',{rocket : data})}/>
                  </View>
                </View>
              </View>
            )
          })}
        </ScrollView>
      )
    }
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
  },
  text : {
    fontSize : 15,
    lineHeight : 30
  },
  moreDetail : {
    width : '40%',
    marginTop: 10,
    alignSelf : 'flex-end'
  }
});

export default List
