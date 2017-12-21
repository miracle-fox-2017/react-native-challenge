import React ,{Component} from 'react'
import { FlatList, StyleSheet, Text, ScrollView, Image,  View, ActivityIndicator } from 'react-native';
import axios from 'axios'
import { Footer, FooterTab, Item, Icon, Input, Container, Header, Button,Content, Card, CardItem, Left, Thumbnail,Spinner, Body } from 'native-base'
import { getArticles } from '../action/articleAction'
import { connect } from 'react-redux'
class HomeScreen extends Component {

    static navigationOptions = {
      title: 'Home',
      headerStyle: {marginTop: 25}
    }
  render() {
    return (
      <View style={{backgroundColor:'#dce5e5', flex:1}}>
        {this.props.articles.length === 0 ? (<View><Text style={{ textAlign: 'center'}}>Loading ...</Text><ActivityIndicator size="large" color="#42f4c2" /></View>) : <Text/>}
        <Container>
        
        <FlatList
          data={ this.props.articles }
          keyExtractor={(item) => item.url}
          renderItem={({item}) => 
          
          <Content >
              <Card>
                <CardItem cardBody>
                <Image source={{uri: item.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{item.title}</Text>
                    <Text note>by: {item.author}</Text>
                    <Text></Text>
                    <Button full onPress={() => {this.props.navigation.navigate('read',{article: item})}}
                    ><Text style={{color: '#fcfcfc'}}>Readmore</Text></Button>
                  </Body>
              </CardItem>
              </Card>
            </Content>
            
        }/>
          <Footer>
            <FooterTab>
              <Button>
                <Icon name="home" />
              </Button>
              <Button active onPress={() => {this.props.navigation.navigate('search')}}>
                <Icon active name="search" />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </View>
    )
  }
  componentWillMount() {
    this.props.getAction()
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.lastArticles
  }
}
const mapDispatchToProps = (dispatch) =>({
  getAction: () => dispatch(getArticles())
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)