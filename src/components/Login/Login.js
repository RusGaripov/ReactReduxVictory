import React, { Component } from 'react'
import  {connect} from "react-redux"
import {loginUser,loginUserAdmin} from "../../store/actions/authActions"
import {Link } from 'react-router-dom';

export class Login extends Component {
    state={
        email:"",
        password:"",
        error:"",
    }

    componentDidUpdate(){
        if(this.props.user) {
            this.props.history.push("/")
        }
    }

    componentDidMount(){
        if(this.props.user) {
            this.props.history.push("/")
        }
    }

    onChange=e=> {
        this.setState({ [e.target.name]: e.target.value});
    };

    onSubmit=e=> {
    e.preventDefault();

    if(this.state.email==="abc@email.com" && this.state.password==="12345"){
        this.props.loginUserAdmin(this.state);
    }

    if(this.state.email==="cba@email.com" && this.state.password==="54321"){
        this.props.loginUser(this.state); 
    }

    else{
        this.setState({
            error:"Логин или пароль введен неверно"  
        })
    }
    }
    

    render() {
        return (
           <div className="row">
               <form className="card p-3 mx-auto col-md-6" onSubmit={this.onSubmit}>
                   <h2 className="text-center">Вход</h2>

                   <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input 
                        type="email"
                        className="form-control"
                        value={this.state.email} 
                        onChange={this.onChange} 
                        name="email"/>
                   </div>

                   <div className="form-group">
                       <label htmlFor="password">Пароль</label>
                       <input 
                        type="password" 
                        className="form-control" 
                        value={this.state.password} 
                        onChange={this.onChange} 
                        name="password"/>
                   </div>

{this.state.error!="" && (<div className="text-danger" style={{ marginTop:"20px",marginBottom:"20px" }}>{this.state.error}</div>)}
                   <button type="submit" className="btn btn-primary btn-lg">Войти</button>
               </form>
           </div>
        )
    }
}

const mapStateToProps = state => ({
    user :state.authReducer.user
})
export default connect(
    mapStateToProps,
    {loginUser,loginUserAdmin}
)(Login);
