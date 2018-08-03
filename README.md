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

###### Byte 7

###### Byte 8

###### Byte 9

###### Byte 10

###### Byte 11

###### Byte 12

###### Byte 13

###### Byte 14

###### Byte 15

###### Byte 16

###### Byte 17


