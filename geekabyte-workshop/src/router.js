import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from "./App"
import About from "./About"

 const AppRouter = () => (
	<Router>
		<div>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
		</div>		
	</Router>
)
 export default AppRouter