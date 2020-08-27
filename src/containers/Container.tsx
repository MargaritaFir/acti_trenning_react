import React, { useEffect, useState } from 'react';
import UsersApi from '../common/api';
import { URL, placeholder, notFound } from '../common/constants';
import { modifyUsersInfo, getSelectedUser } from '../common/usersOperations';
import AutocompliteComponent from '../components/autocompliteComponent/AutocompliteComponent';
import UserInformation from '../components/userInfoComponent/UserInformation';
import { IUserInfo } from '../common/commonInterfaces';


const Container:React.FC = () => {

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

    return (
        <div className='container'>
            <AutocompliteComponent 
                items={modifyUsersInfo(users)} 
                getCurrentItemId={(id) => getCurrentUserId(id)} 
                nameQuery={nameQuery}
                placeholder={placeholder}
                notFound={notFound}
            />
           { currentUser&& <UserInformation user={currentUser}/>  }
              
        </div>
    )

}

export default Container;