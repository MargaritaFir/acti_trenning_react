import React, { useEffect, useState } from 'react';
import { IUserInfo } from '../common/commonInterfaces';
import UsersApi from '../common/api';
import { URL} from '../common/constants';
import {  getSelectedUser } from '../common/usersOperations';

export default function useUsers(){
    const [ users, setUsers ] = useState<IUserInfo[]>([]);
    const [ currentUser, setCurrentUser ] = useState<IUserInfo | null>(null);
    const [ nameQuery, setQuery ] = useState<string>('');

    useEffect(() => {
        const fetchData = async() => {
            const api = new UsersApi(URL);
            const usersFetch = await api.getUsers();
            setUsers(usersFetch);  
        }

        fetchData();

    }, []);

    const getCurrentUserId =(id:number|null) => {
        const currentUserNext = getSelectedUser(users, id);
        setCurrentUser(currentUserNext);

        if(currentUserNext) {
            setQuery(currentUserNext.name);
        } else {
            setQuery(''); 
        }      
    }

    return {
        state: {
            users,
            currentUser,
            nameQuery
        },
        getCurrentUserId
    }    
}