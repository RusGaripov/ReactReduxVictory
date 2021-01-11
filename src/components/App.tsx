import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Graphs from "./Graphs/Graphs"
import NotFound from "./NotFound/NotFound"



export class App extends Component{
  render() {
    return (
      <div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Graphs}/>
            <Route path="/" component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
