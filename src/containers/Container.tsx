import React, { useEffect, useState } from 'react';
import UsersApi from '../common/UsersApi';
import { URL, placeholder, notFoundElement } from '../common/constants';
import Autocomplete from '../components/Autocomplete/Autocomplete';
import UserInformation from '../components/UserInformation/UserInformation';
import { IUserInfo } from '../common/interfaces';
import './container.scss';
const usersApi = new UsersApi(URL);

const Container:React.FC = () => {

    const [ users, setUsers ] = useState<IUserInfo[]>([]);
    const [ selectedUser, setSelectedUser ] = useState<IUserInfo|null>(null);

    useEffect(() => {
        const fetchData = async() => {        
            const usersFetch = await usersApi.getUsers();
            setUsers(usersFetch);  
        }

        fetchData();

    }, []);

    const handleSelectUser = (id: number) => {
        //Здесь не понимаю, как типизировать selected
        const selected:any = users.find((user:IUserInfo) => id === user.id);
        setSelectedUser(selected);
    }

    const removeSelectedUser = () => {
        setSelectedUser(null); 
    }

    return (
        <div className='container'>
            <Autocomplete 
                items={users} 
                placeholder={placeholder}
                notFoundElement={notFoundElement}
                onSelect={handleSelectUser}
                selectItem={selectedUser}
                onClear={removeSelectedUser}
            />
            { selectedUser && <UserInformation user={selectedUser}/> }
        </div>
    )
}

export default Container;