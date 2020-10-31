import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {fetchUser} from '../actions';

const UserHeader = (props) => {

    const user = useSelector(state => state.users.find(user => user.id === props.userId));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(props.userId));
    }, [])

    if(!user){
        return null;
    }

    return (
        <p>{user.name}</p>
    )
}


export default UserHeader;