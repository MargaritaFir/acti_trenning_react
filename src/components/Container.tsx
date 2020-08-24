import React, { useEffect, useState } from 'react';
import UsersApi from '../common/api';
import {URL} from '../common/constants';
import {modifyUsersInfo, getSelectedUser} from '../common/usersOperations';
import AutocompliteComponent from './AutocompliteComponent';
import UserInformation from './UserInformation';



const Container:React.FC = () => {

    const [users, updateUsers] = useState([]);
    const [currentUser, updateCurrentUser] = useState(null);
    const [nameQuery, changeQuery] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            const api = new UsersApi(URL);
            const usersFetch = await api.getUsers();
            updateUsers(usersFetch);  
        }

        fetchData();

    }, []);

    const getCurrentUserId =(id:number) => {
        const currentUserNext = getSelectedUser(users, id);
        console.log('get current', currentUser )
        updateCurrentUser(currentUserNext);
        console.log('currentUser in container', currentUserNext, 'id', id)
        changeQuery(currentUserNext.name)
    }

    return (
        <>
            <div>Find user</div>
            <AutocompliteComponent users={modifyUsersInfo(users)} getCurrentUserId={(id:number) =>getCurrentUserId(id)} nameQuery={nameQuery}/>
            <UserInformation user={currentUser}/>
        
        </>
    )

}

export default Container;