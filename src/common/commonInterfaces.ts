
export interface IItem {
    id: number,
    name: string,
};


export interface IList{
    users:IItem[] | [];
    getUserInfos:(id:number) => void;  
    notFound:string;
};

export interface IAutocompliteProps  {
    users:IItem[] | [];
    getCurrentUserId:(id:number) => void;  
    placeholder: string;
    notFound:string;
    nameQuery:string
};

export interface IUserAddres {
    street: string,
    suite: string,
    city: string 
};


export interface ICompany{
    bs: string,
    catchPhrase: string,
    name: string 
};

export interface IUserInfo {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddres,
    phone: string,
    website: string,
    company: ICompany
};

export interface IInputProps {
    query: string;  
    placeholder:string;
    onInput:(e:any) => void;
    clearQuery: () => void;

    onVisibleList: () => void;
};


export interface IItemProps extends IItem{
    getUserInfos:(id:number) => void;
};