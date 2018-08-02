import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
		super(props)

		// bind events
		this.onTabChange = this.onTabChange.bind(this)
	}

	onTabChange(event) {
		const selectedType = event.target.getAttribute("data-type")
		console.log("tab clicked ", selectedType)
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Changed text</h1>
        </header>
        <p className="App-intro">Click on the Following Tabs</p>
				<div>
					<span data-type="now_showing" onClick={this.onTabChange} className="tab">Now Showing</span>
					<span data-type="top_rated" onClick={this.onTabChange} className="tab">Top Rated</span>
				</div>
      </div>
    );
  }
}

export default App;
