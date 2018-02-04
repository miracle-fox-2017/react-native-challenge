import React from 'react'
import { Text,View,StyleSheet,Button
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import {deleteHero} from '../actions/heroAction'

class HeroList extends React.Component {
	constructor(props){
		super()
	}
	render() {
		return(
			<View>
			<Text style={style.name}> {this.props.hero.Name}   
			</Text>			
			<Button onPress={() => this.props.navigate('Hero', {
				hero: this.props.hero
			})} title="Show Detail" color="#841584"	/> 
			<Button onPress={() => this.removeHero(this.props.heroes,this.props.hero.Name)} title="Delete" color="#311584"	/> 			
			</View>
			)
	}

	removeHero(allHero, heroName) {
		this.props.deleteHero(allHero, heroName)
	}
}

const style = StyleSheet.create({
	name: {
		textAlign: 'center',
		fontSize: 28,
		marginBottom: 10,
		marginTop: 10,
	}
})

function mapStateToProps(state) {
	return {
		heroes: state.heroReducer.heroes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deleteHero: (allHero, heroName) => dispatch(deleteHero(allHero, heroName))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(HeroList)