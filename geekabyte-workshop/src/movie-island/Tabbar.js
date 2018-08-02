import React, { Component } from "react"

// TabBar component renders Types of list to be rendered,
// Whether list if for now showing or top rated movies
class TabBar extends Component {
	constructor(props) {
		super(props)

		// bind events
		this.onTabChange = this.onTabChange.bind(this)

		// initial state
		this.state = { selectedType: "now_showing" }
	}

	onTabChange(event) {
		const selectedType = event.target.getAttribute("data-type")

		this.setState({
			selectedType, // No need of writing selectedType : selectedType // ES6 syntax
		})

		// Let the parent know about the changes
		if (this.props.onTabSelected) {
			this.props.onTabSelected(selectedType)
		}
	}

	render() {
		const { selectedType } = this.state,
			isNowShowingSelected = selectedType === "now_showing",
			isTopRatedSelected = selectedType === "top_rated"

		return (
			<div>
				<span
					className={`tab ${isNowShowingSelected ? "selected" : ""}`}
					onClick={this.onTabChange}
					data-type="now_showing"
				>
					Now Showing
				</span>
				<span
					className={`tab ${isTopRatedSelected ? "selected" : ""}`}
					onClick={this.onTabChange}
					data-type="top_rated"
				>
					Top Rated
				</span>
			</div>
		)
	}
}

export default TabBar