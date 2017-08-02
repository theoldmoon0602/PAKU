import React from 'react'
import axios from 'axios'

import UserInfo from './UserInfo'
import Repositories from './Repositories'

class User extends React.Component {
    constructor() {
	super()
	this.state = {
	    data: {},
	    loaderClass: 'loader',
	    userClass: 'hide'
	}
    }
    // github からユーザ情報を取得してpromiseを返す
    getUserInfo(username) {
	const BASE = 'https://api.github.com/users/'
	return axios.get(BASE+username).then((response) => response.data);
    }
    // DOMのロード時に呼ばれる関数
    componentWillMount() {
	this.getUserInfo(this.props.match.params.username)
	    .then((data) => {
		this.setState({
		    data,
		    loaderClass: 'hide',
		    userClass: 'user'
		})
	    })
	    .catch((error) => {
		console.log(error)
	    })
    }
    render() {
	return (
	    <div>
		<div className={this.state.loaderClass}></div>
		<div className={this.state.userClass}>
		    <UserInfo data={this.state.data} />
		    <Repositories data={this.state.data} />
		</div>
	    </div>
	)
    }
}

export default User
