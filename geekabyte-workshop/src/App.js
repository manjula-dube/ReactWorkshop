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
		console.log("tab clicked ", event)
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
					<span onClick={this.onTabChange} className="tab">Now Showing</span>
					<span onClick={this.onTabChange} className="tab">Top Rated</span>
				</div>
      </div>
    );
  }
}

export default App;
