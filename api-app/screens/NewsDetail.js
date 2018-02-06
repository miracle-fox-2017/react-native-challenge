import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


class NewsDetail extends React.Component {

  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      image: ''
    }
  }

  render() {
    const { state } = this.props.navigation
    console.log(state.params)
    return (
      <View style={style.container}>
        <Text style={style.header}>
          {state.params.data.title}
        </Text>
        <Text style={style.desc}>
          {state.params.data.description}
        </Text>
        <Image source={{ uri: state.params.data.urlToImage }} style={style.image} />
        <Text style={style.desc}>
          Reported By:  {state.params.data.author}
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ff4d4d'
  },
  header: {
    borderBottomWidth: 4,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  desc: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    marginTop: 10,
    width: 200,
    height: 150,
  }
})
export default NewsDetail