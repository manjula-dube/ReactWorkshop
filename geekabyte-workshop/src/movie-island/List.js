import React, { Component } from "react"
import Card from "./Card"

class List extends Component {
	render() {
		const { data } = this.props
		if (!data) {
			return
		}

		return (
			<div className="container">
				{data.map((item, index) => {
					return <Card key={index} data={item}/>
				})}
			</div>
		)
	}
}

export default List