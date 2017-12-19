import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import HeroList from '../components/HeroList'
import Loading from '../components/Loading'

const heroApi = `http://api.herostats.io/heroes/all`

export default class HeroesScreen extends React.Component {
	constructor(props){
		super()
		this.state= {
			heroes: []
		}
	}  	
	render() {
		const { navigate, state } = this.props.navigation
		return (
			<ScrollView>
			{this.state.heroes.length === 0 ? <Loading /> :this.state.heroes.map((hero,i) => {
				return(
					<HeroList hero={hero} key={i} navigate={navigate}/>
					)	
			})}
			</ScrollView>			
			)
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