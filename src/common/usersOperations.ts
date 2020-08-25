import { IUserInfo } from '../common/commonInterfaces';

export function modifyUsersInfo( users:IUserInfo[] ){
    return users.map((user:IUserInfo) => {
        return {
            id: user.id,
            name: user.name
        }
    })
}

export function getSelectedUser( users:any, id:number ){
    return users.find((user:any) => user.id === id)
}