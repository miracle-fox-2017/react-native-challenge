import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation';

export default class HeroScreen extends React.Component {	
    static navigationOptions= (({navigation}) => ({
    	title: navigation.state.params.hero.Name,
	      headerStyle: {
	        backgroundColor: 'transparent',
	        zIndex: 100,
	        top: 0,
	        left: 0,
	        right: 0
	      }    	
    }))

	render() {
		const {navigate, state } = this.props.navigation		
		
		return (
			<View>
				<Text style={Style.value}> <Text style={Style.hero}> Name : </Text> {state.params.hero.Name} </Text>
				<Text style={Style.value}> <Text style={Style.hero}> MS   : </Text> {state.params.hero.Movespeed} </Text>
				<Text style={Style.value}> <Text style={Style.hero}> HP   : </Text> {state.params.hero.HP} </Text>
				<Text style={Style.value}> <Text style={Style.hero}> Mana : </Text> {state.params.hero.Mana} </Text>
				<Text style={Style.value}> <Text style={Style.hero}> Armor : </Text> {state.params.hero.Armor} </Text>
				<Text style={Style.value}> <Text style={Style.hero}> BaseStr : </Text> {state.params.hero.BaseStr} </Text>
				<Text style={Style.value}> <Text style={Style.hero}> BaseAgi : </Text> {state.params.hero.BaseAgi} </Text>
				<Text style={Style.value}> <Text style={Style.hero}> BaseInt : </Text> {state.params.hero.BaseInt} </Text>
			</View>
		)
	}
}

const Style = StyleSheet.create({
	hero: {
		fontSize: 20,
		color: 'black'
	},
	value: {
		color: 'green'
	}
})
