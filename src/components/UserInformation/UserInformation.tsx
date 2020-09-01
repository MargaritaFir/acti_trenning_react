import React, {memo} from 'react';
import { IUserInfo } from '../../common/interfaces';
import './userInformation.scss'

interface IPropsUserInfo {
    user: IUserInfo;
}

const UserInformation:React.FC<IPropsUserInfo> = ( { user } ) => {

    const { name, username, email, address, phone, website, company } = user;

    return (
        <div className="userInfos">
            <fieldset>
                <legend>User info card</legend>
                <div> <span>Name:</span>{name}</div>
                <div><span>Username:</span>{username}</div>
                <div><span>Company:</span>{company.name}</div>
                <div><span>Email:</span>{email}</div>
                <div><span>Address:</span>{`${address.city}, ${address.street} street, ${address.suite}`}</div>
                <div><span>Phone:</span>{phone}</div>
                <div><span>Website:</span>{website}</div>
            </fieldset>
        </div>
    )

}

export default memo(UserInformation);