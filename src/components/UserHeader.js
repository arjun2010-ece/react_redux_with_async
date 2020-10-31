import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

const UserHeader = (props) => {
    useEffect(() => {
        props.fetchUser(props.userId)
    }, [])

    // const user = props.users.find(user => user.id === props.userId);
    const {users} = props;
    if(!props.users){
        return null;
    }

    return (
        <p>{props.users.name}</p>
    )
}

const getState = (state, ownProps) => {
    console.log(state);
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(getState, {fetchUser})(UserHeader);