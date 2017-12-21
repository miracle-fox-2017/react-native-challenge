import React ,{Component} from 'react'
import { ScrollView, Text, Image } from 'react-native';


export default class ReadArticleScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: {marginTop: 25}
  }

  render() {
    let article = this.props.navigation.state.params.article
    return (
      <ScrollView>
        <Image source={{uri: article.urlToImage}} style={{height: 200, width: null}} />
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>{article.title}</Text>
        <Text style={{textAlign: 'center'}}>{article.description}</Text>
      </ScrollView>
    )
  }
}