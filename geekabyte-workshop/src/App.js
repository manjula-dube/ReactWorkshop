import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios" 
import { nowShowingUrl, topRatedUrl } from "./api/apiConfig"

// file imports
import Tabbar from "./movie-island/Tabbar"
import List from "./movie-island/List"

class App extends Component {
	constructor(props) {
		super(props)

		// Bind events
		this.onTabSelected = this.onTabSelected.bind(this)
    this.state = {
			selectedType: "now_showing",
		}
	}

  componentDidMount() {
		this.fetchData(this.state.selectedType)
	}

	onTabSelected(selectedType) {
		this.fetchData(selectedType)
	}

	fetchData(selectedType) {
		// AJAX call to get the API response
		switch (selectedType) {
			case "now_showing":
				axios.get(nowShowingUrl).then(response => {
					this.setState({
						nowShowing: response.data.results,
						selectedType,
					})
				})
				break
			case "top_rated":
				axios.get(topRatedUrl).then(response => {
					this.setState({
						topRated: response.data.results,
						selectedType,
					})
				})
				break
		}
	}

	render() {
    const { selectedType } = this.state
		const { nowShowing, topRated } = this.state
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Movie-island</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<p className="App-intro">Click on the Following Tabs</p>
				<Tabbar onTabSelected={this.onTabSelected} />
        {selectedType === "now_showing" && nowShowing && <List data={nowShowing} />}
				{selectedType === "top_rated" && topRated && <List data={topRated} />}
			</div>
		)
	}
}

export default App