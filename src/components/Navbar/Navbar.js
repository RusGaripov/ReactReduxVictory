import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {connect} from "react-redux"

export class Navbar extends Component {
    render() {
        const {user} = this.props;

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3">
               <div className="container">
                <Link to="/" className="navbar-brand">
                    Новости
                </Link>

                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                   <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse">

                    {user ?
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Добавить новость</Link>
                        </li>
                    </ul>
                    :
                    null
                    }


                {user? (
                    <ul className="navbar-nav">
                      

                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">Выйти</Link>
                        </li>
                    </ul>
                ): (
                       <ul className="navbar-nav">
                       <li className="nav-item">
                           <Link to="/login" className="nav-link">Вход</Link>
                       </li>
                   </ul>
                 )
                }
                    
                </div>

               </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})
export default connect(mapStateToProps)(Navbar);
