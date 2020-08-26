import React from 'react';
import { placeholder, notFound } from '../common/constants';
import { modifyUsersInfo } from '../common/usersOperations';
import AutocompliteComponent from '../components/autocompliteComponent/AutocompliteComponent';
import UserInformation from '../components/userInfoComponent/UserInformation';
import useUsers from '../hooks/useUsers'


const Container:React.FC = () => {

    const {state, getCurrentUserId } = useUsers();

    return (
        <div className='container'>
            <AutocompliteComponent 
                items={modifyUsersInfo(state.users)} 
                getCurrentItemId={(id) => getCurrentUserId(id)} 
                nameQuery={state.nameQuery}
                placeholder={placeholder}
                notFound={notFound}
            />
            <UserInformation user={state.currentUser}/>      
        </div>
    )

}

export default Container;