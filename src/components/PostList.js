import React, {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../actions';
import UserHeader from "./UserHeader";

const PostList = (props) => {

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const renderist = () => {
        return posts.map(post => {
            return (
                <div key={post.title}>
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

export default PostList;