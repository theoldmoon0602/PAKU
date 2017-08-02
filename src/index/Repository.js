import React from 'react'

class Repository extends React.Component {
    constructor() {
	super()
    }

    render() {
	const data = this.props.data
	return (
	    <div className="repository">
		<a href={data.html_url}>
		    {data.name}
		    {
			(() => {
			    if (data.description) {
				return " - " + data.description
			    }
			})()
		    }
		</a>
	    </div>
	)
    }
}

export default Repository
