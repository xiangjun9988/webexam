import React , { Component } from 'react'
import { HashRouter , Route , Link } from 'react-router-dom'
import Container from './container.js'

class index extends Component {
	render(){
		return(
			<div>
				<HashRouter>
					<Container />
				</HashRouter>
			</div>
		)
	}
}

export default index