import axios from 'axios'
const heroApi = `http://api.herostats.io/heroes/all`


export const getHeroes= (payload) => {
	return {
		type: "GET_HEROES",
		payload: payload
	}
}

export const deleteHero= (allHero, heroName) => {
	let newAllHero = allHero.filter(hero => hero.Name !== heroName)
	return(dispatch) => {
		dispatch(getHeroes(newAllHero))
	}
}

export const fetchApiHeroes= () => {
	return (dispatch,getState) => {
		axios.get(heroApi)
		  .then(heroResult => {
		  	let heroTemp = []
		  	for (let hero in heroResult.data){
		  		heroTemp.push(heroResult.data[hero])
		  	}
		  	dispatch(getHeroes(heroTemp))
		  })
		  .catch(err => {
		  	console.log(err)
		  })
	}
}