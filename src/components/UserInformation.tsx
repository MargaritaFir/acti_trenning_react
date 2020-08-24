import React from 'react';
import { IUserInfo } from '../common/commonInterfaces';


const UserInformation = (props:{user:IUserInfo | null}) => {

    const user = props.user;
   
    console.log('user props', props);
    
    if(user){
        const {name, username, email, address, phone, website} = user;
        return (
            <div className="userInfos">
                <fieldset>
                    <legend>{username}</legend>
                    <div>{name}</div>
                    {/* <div>{username}</div> */}
                    <div>{email}</div>
                    {/* <div>{address}</div> */}
                    <div>{phone}</div>
                    <div>{website}</div>
                </fieldset>
                
            </div>
        )
    } else {
        return null
    }
   
}

export default UserInformation;