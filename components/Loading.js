import React from 'react'
import {StyleSheet,
		Text,
		View} from 'react-native'


export default class Loading extends React.Component {
	render(){
		return (
			<View> 
				<Text style={styles.loading} > Loading...
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  loading: {
    fontSize:20,
    color:'black',
    paddingLeft:130,
    paddingRight:130,
    paddingTop:200,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  }	
})