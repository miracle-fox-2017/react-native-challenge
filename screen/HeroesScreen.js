import React from 'react';
import { ScrollView, View, Text, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import HeroList from '../components/HeroList'
import Loading from '../components/Loading'

const heroApi = `http://api.herostats.io/heroes/all`

export default class HeroesScreen extends React.Component {
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
			{this.state.heroes.length === 0 && <Loading /> }
			<FlatList
				data={this.state.heroes}
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
		alert('Reloaaaaaaaaaad')
		this.setState({refreshing: false})
	}
	componentDidMount() {
		this.fetchApi()   
	}

	fetchApi() {
		axios.get(heroApi)
		.then(response => {
			let tempHero = []
			for (let hero in response.data){
				tempHero.push(response.data[hero])
			}
			this.setState({
				heroes: tempHero
			})
		})
		.catch(err => {
			console.log(err)
		})      
	}  	
}