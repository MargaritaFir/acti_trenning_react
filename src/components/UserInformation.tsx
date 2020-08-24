import React from 'react';
import { IUserInfo } from '../common/commonInterfaces';

interface IPropsUserInfo {
    user: IUserInfo | null;
}


const UserInformation = (props:IPropsUserInfo) => {

    const user = props.user;
   
    console.log('user props', props);
    
    if(user){
        const {name, username, email, address, phone, website, company} = user;
        return (
            <div className="userInfos">
                <fieldset>
                    <legend>User info card</legend>
                    <div> <span>Name: </span> {name}</div>
                    <div><span>Username: </span> {username}</div>
                    <div><span>Company: </span>{company.name}</div>
                    <div><span>Email: </span>{email}</div>
                    <div><span>Address: </span>{`${address.city}, ${address.street} street, ${address.suite}`}</div>
                    <div><span>Phone: </span>{phone}</div>
                    <div><span>Website: </span>{website}</div>
                </fieldset>
                
            </div>
        )
    } else {
        return null
    }
   
}

export default UserInformation;