import * as config from './config/index.js'



const initState = {
	config,
	step: 'first',
}


export default (state = initState, action) => {
	switch(action.type) {
		case "ADD": 
			return state
		break
		default: 
			return state
		break
	}
}