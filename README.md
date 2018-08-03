# ReactWorkshop

We will go branch by branch to see what happening :)

If the api doesn't work (Limit might exceed) we can use the following
#### now showing
https://api.myjson.com/bins/nl35k

#### top rated
https://api.myjson.com/bins/o8nx4


###### Byte 1

* Create .gitignore file and add start.sh or start.bat file (mac or windows )
Run the script. 


###### Byte 2

* create-react-app will be globally be installed and geekabyte-workshop folder will be create with minimal react boilerplate setup

###### Byte 3 

* Add logo and change the text to see hot module reloading

###### Byte 4

* Add tabs 

```
<p className="App-intro">Click on the Following Tabs</p>
<div>
  <span className="tab">Now Showing</span>
  <span className="tab">Top Rated</span>
</div>

```

###### Byte 5

Add constructor, Add on click, bind the onClick in constructor, Attach attribute to identify which tab is clicked

```
constructor(props) {
  super(props)

  // bind events
  this.onTabChange = this.onTabChange.bind(this)
}

onTabChange(event) {
  const selectedType = event.target.getAttribute("data-type")
  console.log("tab clicked ", selectedType)
}
  
* HTML

<span data-type="now_showing" onClick={this.onTabChange} className="tab">Now Showing</span>
<span data-type="top_rated" onClick={this.onTabChange} className="tab">Top Rated</span>

```

###### Byte 6
* Define Intial State

```
constructor(props) {
  super(props)

  // bind events
  this.onTabChange = this.onTabChange.bind(this)

  // initial state
  this.state = {}
}

```

###### Byte 7

* Now Showing as default selected

```
// initial state in constructor
this.state = { selectedType: "now_showing" }

Inside render method 

const { selectedType } = this.state,
			isNowShowingSelected = selectedType === "now_showing",
			isTopRatedSelected = selectedType === "top_rated"
      
      
<div>
  <span data-type="now_showing" onClick={this.onTabChange} className={`tab ${isNowShowingSelected ? "selected" : ""}`}>Now Showing</span>
  <span data-type="top_rated" onClick={this.onTabChange} className={`tab ${isTopRatedSelected ? "selected" : ""}`}>Top Rated</span>
</div>      

```

###### Byte 8

* Set state to reflect selected tab type

// No need of writing selectedType : selectedType
// ES6 syntax
```
this.setState({selectedType})

```

###### Byte 9
* See how File import works, Create a file Tabbar.js inside movie-island folder 

```
import React, { Component } from "react"

// TabBar component renders Types of list to be rendered,
// Whether list if for now showing or top rated movies
class TabBar extends Component {
	render() {
		return <h1> Tabbar </h1>
	}
}

export default TabBar

```

And in App.js import the file

```
import Tabbar from "./movie-island/Tabbar"

```

###### Byte 10

###### Byte 11

###### Byte 12

###### Byte 13

###### Byte 14

###### Byte 15

###### Byte 16

###### Byte 17


