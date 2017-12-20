import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Axios from 'axios'

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specification: '',
      image: ''
    }
  }
  
  componentWillMount() {
    let localprops = this.props.navigation.state.params
    if(localprops){
      Axios.get(`https://price-api.datayuge.com/api/v1/compare/specs?api_key=bExRZJVNF5hZhqXljV4xdnV30pLcjZIFKEB&id=${localprops.product_id}`)
      .then(({data}) => {
        console.log('SPESIFIKASI', data)
        this.setState({
          specification: data.data,
          image: localprops.product_image
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  
  render() {
    console.log('INI DI DETAIL', this.props.navigation.state.params)
    console.log('INI DI SPESIFICATION', this.state.specification)
    return (
      <Container>
        {/* <Header/> */}
        <Content>
          <Text>Detail</Text>
        </Content>
      </Container>
    );
  }
}