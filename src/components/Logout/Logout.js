import React, { Component } from 'react'
import {connect} from "react-redux"

import {logoutUser} from "../../store/actions/authActions"

export class Logout extends Component {
    componentDidMount(){
        this.props.logoutUser();
        this.props.history.replace("/login")

    }
    render() {
        return (
            <div>
              Выход 
            </div>
        )
    }
}

export default connect(null, {logoutUser})(Logout)
