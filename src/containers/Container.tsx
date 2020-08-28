import React, { useEffect, useState } from 'react';
import UsersApi from '../common/UsersApi';
import { URL, placeholder, notFound } from '../common/constants';
import Autocomplete from '../components/Autocomplete/Autocomplete';
import UserInformation from '../components/UserInformation/UserInformation';
import { IUserInfo } from '../common/interfaces';
import './container.scss';

const api = new UsersApi(URL);

const Container:React.FC = () => {

    const [ users, setUsers ] = useState<IUserInfo[]>([]);
    const [ selectUser, setSelectedUser ] = useState<IUserInfo|null>(null);

    useEffect(() => {
        const fetchData = async() => {        
            const usersFetch = await api.getUsers();
            setUsers(usersFetch);  
        }

        fetchData();

    }, []);

    const handleSelectUser = (id: number) => {
        const selected:any = users.find(user => id === user.id);
        setSelectedUser(selected)
    }

    const handleClear = () => {
        setSelectedUser(null); 
    }

    return (
        <div className='container'>
            <Autocomplete 
                items={users} 
                placeholder={placeholder}
                notFound={notFound}
                onSelect={handleSelectUser}
                selectItem={selectUser}
                onClear={handleClear}
            />
            { selectUser && <UserInformation user={selectUser}/> }
        </div>
    )

}

export default Container;