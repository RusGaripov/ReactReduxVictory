import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Posts from "./Posts/Posts"
import NotFound from "./NotFound/NotFound"
import Navbar from "./Navbar/Navbar"
import Login from "./Login/Login"
import Logout from "./Logout/Logout"
import PostPage from "./PostPage/PostPage"
import AddPost from "./AddPost/AddPost"


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Posts}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/one/:id" component={PostPage}/>
            <Route exact path="/add" component={AddPost}/>
            <Route path="/" component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
