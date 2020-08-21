import React from 'react';

interface IUserAddres{
    street: string,
    suite: string,
    city: string 
}

interface IUserInfo {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddres,
    phone: string,
    website: string,
    company: string
}


const UserInformation = (props:any) => {
    const {name, username, email, address, phone, website} = props.user;
    console.log('user props', props)

    return (
        <div className="userInfos">
            <fieldset>
                <legend>UserInfos</legend>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
                <div>{address}</div>
                <div>{phone}</div>
                <div>{website}</div>
            </fieldset>
            
        </div>
    )
}

export default UserInformation;