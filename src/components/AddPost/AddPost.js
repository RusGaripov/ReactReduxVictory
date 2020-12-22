import React, { Component } from 'react'
import {connect} from "react-redux"

import {addPost} from "../../store/actions/newsActions"

export class AddPost extends Component {
    state={
        id:null,
        approved:"false",
        time:"12-01-2020",
        title:"",
        text:""

    };

    onChange = e => {
      this.setState({ [e.target.name]:e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state,this.props.history)
    }
    render() {
        const {title,text}=this.state
        return (
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Заголовок</label>
                <input
                type="text"
                value={title}
                onChange={this.onChange}
                name="title"
                className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="title">Содержание</label>
                <input
                type="text"
                value={text}
                onChange={this.onChange}
                name="text"
                className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Опубликовать
            </button>

            </form>
        )
    }
}

export default connect(null, {addPost})(AddPost)
