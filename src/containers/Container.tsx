import React, { useEffect, useState } from 'react';
import UsersApi from '../common/api';
import { URL, placeholder, notFound } from '../common/constants';
import { modifyUsersInfo, getSelectedUser } from '../common/usersOperations';
import AutocompliteComponent from '../components/autocompliteComponent/AutocompliteComponent';
import UserInformation from '../components/userInfoComponent/UserInformation';
import { IUserInfo } from '../common/commonInterfaces';


const Container:React.FC = () => {

    const [ users, updateUsers ] = useState<IUserInfo[]>([]);
    const [ currentUser, updateCurrentUser ] = useState<IUserInfo | null>(null);
    const [ nameQuery, changeQuery ] = useState<string>('');

    useEffect(() => {
        const fetchData = async() => {
            const api = new UsersApi(URL);
            const usersFetch = await api.getUsers();
            updateUsers(usersFetch);  
        }

        fetchData();

    }, []);


    const getCurrentUserId =(id:number|null) => {
        const currentUserNext = getSelectedUser(users, id);
        updateCurrentUser(currentUserNext);

        if(currentUserNext) {
            changeQuery(currentUserNext.name);
        } else {
            changeQuery(''); 
        }      
    }

    return (
        <div className='container'>
            <AutocompliteComponent 
                items={modifyUsersInfo(users)} 
                getCurrentItemId={(id) => getCurrentUserId(id)} 
                nameQuery={nameQuery}
                placeholder={placeholder}
                notFound={notFound}
            />
            <UserInformation user={currentUser}/>      
        </div>
    )

}

export default Container;