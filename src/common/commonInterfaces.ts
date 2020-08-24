
export interface IItem {
    id: number,
    name: string,
};


export interface IList{
    users:IItem[];
};


export interface IUserAddres{
    street: string,
    suite: string,
    city: string 
};

export interface IUserInfo {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddres,
    phone: string,
    website: string,
    company: string
};