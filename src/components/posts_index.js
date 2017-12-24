import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {

    //componentWillMount - React will call this automaticly whenever the component is about to be render to the dom for the first time. 
    //This is a good place to put the action creator.
    componentWillMount() {
        console.log("This will be a good time to call an action creator");
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>
               <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary">
                    Add a Post
                </Link>

               </div>
            </div>
        );

    }
}

//Now the return value of fetchProps function will return it here as props.
// function mappDispatchToProps(dispatch){
//     return bindActionCreators({ fetchPosts }, dispatch);
// } 

export default connect(null,{fetchPosts})(PostsIndex);