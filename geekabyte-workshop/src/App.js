import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

// file imports
import Tabbar from "./movie-island/Tabbar"

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Movie-island</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<p className="App-intro">Click on the Following Tabs</p>
				<Tabbar />
			</div>
		)
	}
}

export default App