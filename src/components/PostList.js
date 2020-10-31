import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import UserHeader from "./UserHeader";

const PostList = (props) => {
    console.log(props.posts);
    useEffect(() => {
        props.fetchPosts();
    }, []);

    const renderist = () => {
        return props.posts.map(post => {
            return (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <UserHeader userId={post.userId}/>
                </div>
            )
        })
    }
    return (
        <div>
            {renderist()}
        </div>
    )
}

const getState = (state) => {
    // console.log(state);
    return {
        posts: state.posts
    }
}

export default connect(getState, {fetchPosts})(PostList);