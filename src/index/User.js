import React from 'react'
import axios from 'axios'

class User extends React.Component {
    constructor() {
	super()
    }
    getUserInfo(username) {
	const BASE = 'https://api.github.com/users/'
	return axios.get(BASE+username).then((response) => response.data);
    }
    componentWillMount() {
	this.getUserInfo(this.props.match.params.username)
	    .then((data) => {
		console.log(data)
	    })
	    .catch((error) => {
		console.log(error)
	    })
    }
    render() {
	return (
	    <div>Hello {this.props.match.params.username}</div>
	)
    }
}

export default User
