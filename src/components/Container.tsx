import React, { useEffect, useState } from 'react';
import UsersApi from '../common/api';
import {URL} from '../common/constants';
import {modifyUsers, getSelectedUser} from '../common/modifyUsers';
import AutocompliteComponent from './AutocompliteComponent';
import UserInformation from './UserInformation'


const Container:React.FC = () => {

    const [users, updateUsers] = useState([]);
    const [currentUser, updateCurrentUser] = useState({ name: 'user', address: 'street mira'})

    useEffect(() => {
        const fetchData = async() => {
            const api = new UsersApi(URL);
            const users = await api.getUsers();
            const modifyList = modifyUsers(users)
            updateUsers(modifyList);  
        }

        fetchData();

    }, []);

    return (
        <>
            <div>Find user</div>
            <AutocompliteComponent users={users} />
            <UserInformation user={currentUser}/>
        
        </>
    )

}

export default Container;