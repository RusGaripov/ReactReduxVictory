import React, { Component } from 'react'
import {connect} from "react-redux"
import  {getOne,deleteNews,approveOne} from "../../store/actions/newsActions"
import Spinner from "../Spinner/Spinner"

export class PostPage extends Component {
componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getOne(id);
}

deleteNews = () => {
    const id = this.props.match.params.id;
    this.props.deleteNews(id,this.props.history);
}


approveOne = () => {
    const id = this.props.match.params.id;
    this.props.approveOne(id,this.props.history);
}
    render() {
        const {one,user}= this.props

        if(!one) {
            return <Spinner/>
        }
        return (
            <div>
                <h1>{one.title}</h1>
                <p>{one.text}</p>
                {(user && user.name==="Roger") ? (
                    <div>
                        <button onClick={this.deleteNews} className="btn btn-danger mr-2">Удалить</button>
                        <button onClick={this.approveOne} className="btn btn-дшпре mr-2">Одобрить</button>
                    </div>
                ) :
                null
                }
            </div>
        )
    }
}

const mapStateToProps= state => ({
    one:state.newsReducer.one,
    user: state.authReducer.user

})
export default connect(mapStateToProps, {getOne,deleteNews,approveOne})(PostPage)
