import React , { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch } from 'antd'

import './left.css'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const style = {
	position: "fixed",
	top: 0,
	left: 0,
	width : "25%",
	height: "100%",
	background: "#333"
}

class Left extends Component {
	state = {
		mode: 'inline',
		theme: 'light',
		current: '1',
		openKeys: []
	}
	constructor() {
		super()
		console.log(this)
	}
	loopMenu (item) {
		return item.map((row, index) => {
			return (
				row.item ? 
				<SubMenu key={row.key} title={<span><Icon type={row.icon} /><span>{row.title}</span></span>}>
					{
						this.loopMenu(row.item)
					}
				</SubMenu>
				:
				<Menu.Item key={row.key}>
					<Icon type={row.icon} />
					<Link to={row.route} style={{display: 'inline'}}>{row.title}</Link>
				</Menu.Item>
			)
		})
	}
	changeMode = (value) => {
		console.log(this)
		this.setState({
			mode: value ? 'vertical' : 'inline'
		})
	}
	changeTheme = (value) => {
		this.setState({
			theme: value ? 'dark' : 'light'
		})
	}
	handleClick = (e) => {
		console.log('Clicked: ', e)
		this.setState({ current: e.key })
	}
	onOpenChange = (openKeys) => {
		const state = this.state;
		console.log(openKeys)
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
		const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

		let nextOpenKeys = [];
		if (latestOpenKey) {
			nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}
		if (latestCloseKey) {
			nextOpenKeys = this.getAncestorKeys(latestCloseKey);
		}
		this.setState({ openKeys: nextOpenKeys });
	}
	getAncestorKeys = (key) => {
		const map = {
			sub3: ['sub2']
		}
		return map[key] || [];
	}
	render(){
		return (
	 		<div style={ style } className="left-menu">
	 			<Menu className="111"
				        onClick={this.handleClick}
				        // defaultSelectedKeys={['2']}
				        // defaultOpenKeys={['sub1']}
				        mode={this.state.mode}
				        theme={this.state.theme}
				        onClick={this.handleClick}
				        style={{
				        	height: '100%'
				        }}
				>
					{
						this.props.menu.map((item, index) => {
							return (
								item.item ? 
								<SubMenu
									key={item.key}
									title={
										<span>
											<Icon type={item.icon} />
											{
												item.item ? <span>{item.title}</span>
												: <Link to={item.route}>{item.title}</Link>
											}
										</span>
									}
								>
									{
										this.loopMenu(item.item)
									}
								</SubMenu>
								: <Menu.Item key={item.key}>
									<Icon type={item.icon} />
									<Link to={item.route} style={{display: 'inline'}}>{item.title}</Link>
								</Menu.Item>
							)
						})
					}
					<SubMenu key={'layout'} title={<span><Icon type='setting' /><span>主题</span></span>}>
						<Menu.Item key={'layout-mode'}>
							<Icon type='menu-unfold' />
							<Switch onChange={this.changeMode}
							checkedChildren="Vertical"
          							unCheckedChildren="Inline" />
						</Menu.Item>
						<Menu.Item key={'layout-theme'}>
							<Icon type='skin' />
							<Switch onChange={this.changeTheme}
							checkedChildren="Dark"
          							unCheckedChildren="Light" />
						</Menu.Item>
					</SubMenu>
				</Menu>
	 		</div>
		)
	}
}

export default connect(state => {
	return {
		menu: state.config.menu
	}
})(Left)