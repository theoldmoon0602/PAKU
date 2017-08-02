import React from 'react'

class UserInfo extends React.Component {
    constructor() {
	super()
    }

    render() {
	const data = this.props.data
	return (
	    <div className="userinfo">
		<img
		    className="face"
		    src={data.avatar_url} />
		<dl>
		    <dt>Name</dt>
		    <dd>{data.name}</dd>
		    <dt>id</dt>
		    <dd>{data.login}</dd>
		</dl>
	    </div>
	)
    }
}

export default UserInfo
