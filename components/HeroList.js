import React from 'react'
import { Text,View,StyleSheet,Button
} from 'react-native'
import { StackNavigator } from 'react-navigation';

export default class HeroList extends React.Component {
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
			</View>
			)
	}
}

const style = StyleSheet.create({
	name: {
		fontSize: 20,
		marginBottom: 10,
		marginLeft: 10,
		marginTop: 10,
	}
})