import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Input, Col, InputNumber, Icon, Tooltip } from 'antd'
const InputGroup = Input.Group

class UnitAdd extends Component {
	state = {
		list: [
			{
				id: 0,
				unit: 1,
				name: '未命名单元'
			}
		]
	}
	style = {
		container: {
			padding: 20
		}
	}
	emitEmpty (_index) {
		// this.userNameInput.focus()
		let arr = [...this.state.list]
		arr[_index].name = ''
		this.setState({
			list: arr
		})
	}
	inputName (_index, e) {
		console.log(_index, e)
		let arr = [...this.state.list]
		arr[_index].name = e.target.value
		this.setState({
			list: arr
		})
	}
	insertOne () {
		this.setState({
			list: [...this.state.list, {
				id: this.state.list[this.state.list.length - 1].id + 1,
				unit: this.state.list.length + 1,
				name: '未命名单元'
			}]
		})
		console.log(this)
	}
	deleteOne (_index) {
		let arr = [...this.state.list]
		arr.splice(_index, 1)
		this.setState({
			list: arr
		})
	}
	render () {
		return (
			<div style={this.style.container}>
				{
					this.state.list.map((item, index) => {
						return (
							<InputGroup size="default" style={{margin: '20px 0'}} key={item.id}>
								<Col span={6}>
									<span>第</span>
									<InputNumber defaultValue={item.unit} style={{margin: '0 5px'}} />
									<span>单元: </span>
								</Col>
								<Col span={8}>
									<Input
									defaultValue={item.name}
									value={item.name}
									onChange={this.inputName.bind(this, index)}
									suffix={this.state.list[index].name ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, index)} /> : null} />
								</Col>
								<Col span={3}>
									<Tooltip placement="right" title={index === 0 ? '这将会增加一列。' : '这将会删除一列。'}>
										{
											index === 0 ? 
											<Icon type="plus-square-o" style={{fontSize: 26, cursor: 'pointer'}} onClick={this.insertOne.bind(this)} />
											: 
											<Icon type="minus-square-o" style={{fontSize: 26, cursor: 'pointer'}} onClick={this.deleteOne.bind(this, index)} />
										}
									</Tooltip>
								</Col>
							</InputGroup>
						)
					})
				}
			</div>
		)
	}
}

export default UnitAdd
