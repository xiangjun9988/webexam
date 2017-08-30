import React , { Component } from 'react'
import Left from './left.js'
import Right from './right.js'

export default class Container extends Component {
	render(){
		return (
			<div>
				<Left />
				<Right />
			</div>
		)
	}
}