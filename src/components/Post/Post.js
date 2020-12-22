import React, { Component } from 'react'
import  {Link}  from "react-router-dom"

export class Post extends Component {
    shortText = text => text.substr(0,100) + "..."
    render() {
        const {one,filteredOne}=this.props
        return (
            <div className="card">
                {one ?
                <div className="card-body">
                    <h1>{one.title}</h1>
                    <h2 style={{fontSize:"16px", color: '#8B008B'}}>{one.time}</h2>
                    <p>{this.shortText(one.text)}</p>
                    <Link to={`/one/${one.id}`} className="btn btn-primary">Подробнее</Link>
                </div>
                :
                <div className="card-body">
                <h1>{filteredOne.title}</h1>
                <h2 style={{fontSize:"16px"}}>{filteredOne.time}</h2>
                <p>{this.shortText(filteredOne.text)}</p>
                <Link to={`/one/${filteredOne.id}`} className="btn btn-primary">Подробнее</Link>
            </div>
    }
            </div>
        )
    }
}

export default Post
