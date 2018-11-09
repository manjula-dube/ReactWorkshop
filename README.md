# ReactWorkshop

Install [Node](https://nodejs.org/en/download/)
Install [Git](https://git-scm.com/download/mac)

If not its fine we can go ahead with code sandbox :)

###### Byte 1

* Create .gitignore file and add start.sh or start.bat file (mac or windows )
Run the script. 


###### Byte 2

* [create-react-app](https://github.com/facebook/create-react-app) will be globally installed and geekabyte-workshop folder will be create with minimal react boilerplate setup

###### Byte 3 

* Add logo and change the text to see hot module reloading

Here's the logo [ link ](https://raw.githubusercontent.com/manjula91/ReactWorkshop/byte3/geekabyte-workshop/src/logo.svg)

###### Byte 4

* Add tabs and replace your App.css file Here's the [ link ](https://raw.githubusercontent.com/manjula91/ReactWorkshop/byte17/geekabyte-workshop/src/App.css)

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
* Move Tabbar in seperate component & import in the App.js

###### Byte 11

* Bubble up the event to the parent and Add API request using axios, make sure you have axios installed :)

Add ApiConfig.js where we have api end points

```
const secret = "6431579d356b75728144f5d6ce38ad9a"

export const nowShowingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${secret}&language=en-IN&page=1`

export const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${secret}&language=en-IN&page=1`
```
In App.js since its a parent 

```
constructor(props) {

   super(props)
   // Bind events
   this.onTabSelected = this.onTabSelected.bind(this)
}

onTabSelected(selectedType) {
  axios.get(nowShowingUrl)
  axios.get(topRatedUrl)
}

```
In the render method add onTabSelected as property

```
<Tabbar onTabSelected={this.onTabSelected} />

```

In Tabbar.js to let the parent know about what happening with the children

```
onTabChange(event) {
  // Let the parent know about the changes
  if (this.props.onTabSelected) {
    this.props.onTabSelected(selectedType)
  }
}

```

###### Byte 13

Save response in App State 

```
onTabSelected(selectedType) {
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


```
###### Byte 13.1
* Render the JSON data of each card using list component

Create List.js and show the data on the screen and make sure you add state in the App.js file

###### Byte 13.2
Create a card component pass data as prop to it and instead li make a card that iterates through the list
Here's the link to the card [ component ] (https://raw.githubusercontent.com/manjula91/ReactWorkshop/byte13.2/geekabyte-workshop/src/movie-island/Card.js)

In List.js

```
return (
<div className="container">
	{data.map((item, index) => {
		return <Card key={index} data={item}/>
	})}
</div>
)

```
Card here is a component created:


###### Byte 14
Every one at the same level


###### Byte 15

Segeregate data fetching, default selected tab flows from parent

// initial state

```
this.state = { selectedType: this.props.selectedType }

```

###### Byte 16

Show more feature. PLEASE IMPLEMENT IT AS HOMEWORK

###### Byte 17

Default tab should ne now showing and make and API call on componentDidMount for intial load of now showing data


We will go branch by branch to see what happening :)

If the api doesn't work (Limit might exceed) we can use the following
#### now showing
https://api.myjson.com/bins/nl35k

#### top rated
https://api.myjson.com/bins/o8nx4


