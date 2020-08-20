import React, { useEffect, useState } from 'react';
import UsersApi from '../common/api';
import List from './List';
import {URL} from '../common/constants';
import {modifyUsers, getSelectedUser} from '../common/modifyUsers'




const Container:React.FC = () => {
  
    const [users, updateUsers] = useState([])

    useEffect(() => {

        const fetchData = async() => {
        const api = new UsersApi(URL);
        const users = await api.getUsers();
        const modifyList = modifyUsers(users)
        updateUsers(modifyList);
    
    }

  fetchData();


  }, []);

  useEffect(() => {
      console.log('user selected',  getSelectedUser(users, 3));
   
  }, [users])

  console.log('this state',users)

return (
    <>
        <div>This is Container</div>
        <List type="This is List"/>
    </>
)

}

export default Container;