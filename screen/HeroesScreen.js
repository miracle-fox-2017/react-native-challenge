import React from 'react';

import { ScrollView, View, Text, Button, FlatList,ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import HeroList from '../components/HeroList'
import { fetchApiHeroes } from '../actions/heroAction'
import { connect } from 'react-redux'


const heroApi = `http://api.herostats.io/heroes/all`

class HeroesScreen extends React.Component {
	constructor(props){
		super()
		this.state= {
			heroes: [],
			refreshing: false
		}
	}  	
	render() {
		const { navigate, state } = this.props.navigation
		return (
			<View>
			{this.props.heroes.length === 0 && <ActivityIndicator
			   color = '#bc2b78'
               size = "large"
            /> }
			<FlatList
				data={this.props.heroes}
				onRefresh={() => this.updatedData()}
				refreshing={this.state.refreshing}
				keyExtractor= {(item,index) => item.Name}
				renderItem= {({item}) => {
					return(
						<HeroList hero={item} key={item.Name} navigate={navigate}/>
					)						
				}}
			/>
			</View>			
		)
	}

	updatedData() {
		this.setState({refreshing: true})
		this.props.fetchApiHeroes()
		this.setState({refreshing: false})
	}
	componentDidMount() {
		this.props.fetchApiHeroes() 
	} 	
}

function mapStateToProps(state) {
	return {
		heroes: state.heroReducer.heroes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchApiHeroes: () => dispatch(fetchApiHeroes())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeroesScreen)