import React, { useEffect, useState } from 'react';
import UsersApi from '../common/api';
import {URL, placeholder, notFound} from '../common/constants';
import {modifyUsersInfo, getSelectedUser} from '../common/usersOperations';
import AutocompliteComponent from './AutocompliteComponent';
import UserInformation from './UserInformation';



const Container:React.FC = () => {

    const [ users, updateUsers ] = useState([]);
    const [ currentUser, updateCurrentUser ] = useState(null);
    const [ nameQuery, changeQuery ] = useState('');

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
        // console.log('get current', currentUser )
        updateCurrentUser(currentUserNext);
        // console.log('currentUser in container', currentUserNext, 'id', id)
        if(currentUserNext) {
            changeQuery(currentUserNext.name);
        } else {
            changeQuery('') 
        }

        
    }

    return (
        <div className='container'>
            <AutocompliteComponent 
                users={modifyUsersInfo(users)} 
                getCurrentUserId={(id:any) => getCurrentUserId(id)} 
                nameQuery={nameQuery}
                placeholder={placeholder}
                notFound={notFound}
            />
            <UserInformation user={currentUser}/>      
        </div>
    )

}

export default Container;