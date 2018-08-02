import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Changed text</h1>
        </header>
        <p className="App-intro">Click on the Following Tabs</p>
				<div>
					<span className="tab">Now Showing</span>
					<span className="tab">Top Rated</span>
				</div>
      </div>
    );
  }
}

export default App;
