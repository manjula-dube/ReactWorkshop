import React, { Component } from "react"

class List extends Component {
	render() {
		const { data } = this.props
		if (!data) {
			return
		}

		return (
			<div className="container">
				{data.map((item, index) => {
					return <li key={index}> {JSON.stringify(item)} </li>
				})}
			</div>
		)
	}
}

export default List