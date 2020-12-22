import React, { Component } from 'react'
import {connect} from "react-redux"
import {getNews,onFindNews} from "../../store/actions/newsActions"
import Spinner from "../Spinner/Spinner"
import  Post from  "../Post/Post"

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
           search:""
        };
      }
      
   componentDidMount() {
     this.props.getNews();
   }

   onChange = e => {
       this.setState({
           search:e.target.value
       })
       this.props.onFindNews(this.state.search);
   }

    render() {  
        const {user,news} = this.props;
        
        if(!news){
            return <Spinner/>;
        }

        return (
            <div>
            <div>
              { user ? <div><p style={{ fontSize:"20px",color:"#8B008B" }}>Привет, {user.name}</p>
               </div>   
              :
              <p style={{ fontSize:"20px"}}>Привет, гость</p>
        }
            </div>

            <input type="text" style={{ marginBottom:"20px" }} onChange={this.onChange}/>
    
          { user ?
            <div>
               {news.map(one=> {
                   return <Post key = {one.id} one={one}/>
               })}
            </div>
               :
               <div>
               {news.filter(one=> one.approved==="true").map(filteredOne=>(<Post key = {filteredOne.id} filteredOne={filteredOne}/>))}
               </div>
              
            }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    news: state.newsReducer.news,
})

export default connect(mapStateToProps, {getNews,onFindNews})(Posts)
