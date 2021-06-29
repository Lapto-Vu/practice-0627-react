import React from "react"
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Nav from "./Components/Nav"
import TV from "./Router/TV";
import Movie from "./Router/Movie"
import Search from "./Router/Search";
import Detail from "./Router/Detail"

const Routes = () => {
    
    return (
        <Router>
            <React.Fragment>
                <Nav />
                <Switch>
                    <Route path="/movie/:id" component={Detail} />
                    <Route path="/" exact component={Movie} />
			        <Route path="/tv" exact component={TV} />
			        <Route path="/search" exact component={Search} />
                    <Route path="/tv/:id" exct component={Detail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </React.Fragment>
        </Router>
    )
}

export default Routes