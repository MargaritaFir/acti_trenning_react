export function modifyUsers(users:any){
    return users.map((user:any) => {
        return {
            id: user.id,
            name: user.name
        }
    })
}

export function getSelectedUser( users:any, id:number){
    return users.find((user:any) => user.id === id)
}