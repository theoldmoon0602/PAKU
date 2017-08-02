import React from 'react'

class Entry extends React.Component {
    constructor() {
	super()
	this.state = {
	    username: ''
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
	return (
	    <form
		onSubmit={this.handleSubmit}
	    >
		<input
		    type="text"
		    placeholder="Enter GitHub user"
		    value={this.state.username}
		    onChange={this.handleChange}
		/>
		<button
		    type="submit">
		    Go
		</button>
	    </form>
	)
    }
    handleSubmit(e) {
	e.preventDefault()
	this.props.history.push("/"+this.state.username)
    }
    handleChange(e) {
	this.setState({username: e.target.value})
    }
}

export default Entry
