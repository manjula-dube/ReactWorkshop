import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./App"
import About from "./About"

 const AppRouter = () => (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/about" component={About} />
		</div>
	</Router>
)
 export default AppRouter