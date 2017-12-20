import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Button, 
  FlatList, 
  ActivityIndicator, 
  TextInput 
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import ArticleRow from './components/ArticleRow'
import { connect } from 'react-redux'
import { fetchArticles } from './actions/articleAction'

class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newsList: [],
      isLoading: false,
      isRefreshing: false,
      page: 1,
      query: 'Search here..'
    }
  }

  fetchNewsAPI() {
    this.setState({
      isLoading: true
    })

    this.props.loadNews(this.state.page)
  }

  reloadNewsAPI() {
    this.setState({
      isRefreshing: true
    })

    this.props.loadNews(this.state.page)
  }

  refreshData() {
    this.setState({
      isRefreshing: true
    })

    this.reloadNewsAPI()
  }

  loadMoreData() {
    if (this.state.newsList.length > 0) {
      

      this.setState({
        isLoading: true
      })

      let page = this.state.page += 1
      console.log("loadMoreData--------------------", page)

      this.props.loadNews(page)
    }
  }

  componentWillMount() {
    this.fetchNewsAPI()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: nextProps.isLoading,
      newsList: nextProps.newsList,
      isRefreshing: nextProps.isRefreshing
    })
  }

  render() {
    const { navigate } = this.props.navigation
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        fontWeight: 'bold'
      },

      container: {
        flex: 1,
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
    }); 

    return (
      <View style={styles.container}>
        
        <FlatList
          onEndReached={() => this.loadMoreData()}
          onRefresh={() => this.refreshData()}
          refreshing={this.state.isRefreshing}
          data={this.state.newsList}
          keyExtractor={(item, index) => 'article-'+item.id}
          renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={() => navigate('Details', { article: item })}>
                <ArticleRow article={item}/>
              </TouchableOpacity>
            )
          }}
          ListFooterComponent={() => { return (
            this.state.isLoading && <ActivityIndicator size="large" color="#0000ff" />
          ) }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.articleReducer.newsList,
    isLoading: state.articleReducer.isLoading,
    isRefreshing: state.articleReducer.isRefreshing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: (page) => dispatch(fetchArticles(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
// export default HomeScreen