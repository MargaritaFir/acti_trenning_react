export interface IItem {
    id: number,
    name: string,
};

export interface IList {
    items:IItem[] | [];
    getItemInfos:(id:number) => void;  
    notFound:string;
};

export interface IAutocompliteProps  {
    items:IItem[] | [];
    getCurrentItemId:(id:number|null) => void;  
    placeholder: string;
    notFound:string;
    nameQuery:string
};

export interface IUserAddres {
    street: string,
    suite: string,
    city: string 
};

export interface ICompany {
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

export interface IItemsContainerProps {
    itemsList: IItem[];
    getItemInfos:(id:number) => void;  
}

export interface IItemProps extends IItem {
    getItemInfos:(id:number) => void;
};

export interface INotFoundProps {
    notFound: string;
}