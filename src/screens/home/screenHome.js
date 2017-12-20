import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, 
  FooterTab, Button, Icon, List, ListItem, H2, 
  Title, Left, Right, Body, 
  Card, CardItem} from 'native-base';
  import { FlatList } from "react-native";
import Axios from 'axios'
import {connect} from 'react-redux'
import {getSuggest} from '../../actions'

export class screenHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSuggest : [],
      suggest: ''
    }
  }
  componentWillMount() {
    this.props.getSuggest()
    // https://price-api.datayuge.com/api/v1/compare/search/suggest?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&product=Oppo
    // https://price-api.datayuge.com/api/v1/compare/search?product=oppo&api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB
    
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>Home</Text>
          {/* <List>
            <ListItem itemHeader first>
            <Text>Keyword searching today: </Text>
              <H2>{this.state.suggest}</H2>
            </ListItem>
            <FlatList
              data={this.state.listSuggest}
              keyExtractor = { (item, i) => i}
              renderItem = { ({item}) =>(
                <ListItem>
                  <Text>{item}</Text>
                </ListItem>
              )}
              />
          </List> */}
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'INI SATTE HOME')
  return {
    // allPhotos: state.postTweet.allphotos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSuggest: () => dispatch(getSuggest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(screenHome)