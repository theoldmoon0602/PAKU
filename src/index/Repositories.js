import React from 'react'
import axios from 'axios'

import Repository from './Repository'

class Repositories extends React.Component {
    constructor() {
	super()
	this.state = {
	    repos: []
	}
    }

    getRepositories(username) {
	const URL = 'https://api.github.com/users/' + username + '/repos?sort=updated'
	return axios.get(URL).then((response) => response.data);
    }

    // 親が与えてきたデータが更新されたとき
    componentWillReceiveProps(nextProps) {
	// this.propsは古いprops、nexPropsは新しいprops
	this.getRepositories(nextProps.data.login)
	    .then((data) => {
		this.setState({repos: data})
	    })
	    .catch((error) => {
	    })
    }

    render() {
	const repos = this.state.repos
	return (
	    <ul className="repositories">
		{
		    repos.map((repo)=> {
			return (
			    <li key={repo.id}>
				<Repository data={repo} />
			    </li>
			)
		    })
		}
	    </ul>
	)
    }
}

export default Repositories
