import React ,{Component} from 'react'
import { Image , ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail,Spinner, Button } from 'native-base'
import axios from 'axios'
import ReadArticleScreen from './ReadArticleScreen'

class ArticleScreen extends Component {
  constructor() {
    super()
    this.state = {
     articles: []
    }
  }
    static navigationOptions = {
      title: 'Article'
    }
  render() {
    console.log(this.state.articles.length)
    return (
      <ScrollView>
        {this.state.articles.length === 0 ? <Spinner color='red' /> : <Text></Text>}
      {this.state.articles.map((article, i) => {
        return (
          <Container key={i}>
          
            <Content >
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: article.urlToImage}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{article.title}</Text>
                    <Text note>by: {article.author}</Text>
                    <Text></Text>
                    <Button primary onPress={(index) => {this.getArticleById(i)}}><Text> Readmore </Text></Button>
                  </Body>
              </CardItem>
              </Card>
            </Content>
          </Container>
          
          )
        })}


        <ReadArticleScreen article={this.getArticleById}/>
        </ScrollView>
    )
  }

  getArticleById(index) {

    let article = this.state.articles[index]
    this.props.navigation.navigate('read', {name: 'read'})
    return article
  }

  componentWillMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge&apiKey=7c22194db6574183a086c357016e6e6f')
    .then(({data}) => {
      console.log(data)
      this.setState({
        articles: data.articles
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default ArticleScreen